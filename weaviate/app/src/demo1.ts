import { config } from 'config'
import weaviate, { vectors } from 'weaviate-client'

const client = await weaviate.connectToLocal({
  host: config.weaviateHost,
})

await client.collections.delete('Incident')

await client.collections.create({
  name: 'Incident',
  vectorizers: vectors.text2VecOllama({
    apiEndpoint: config.ollamaUrl,
    model: 'nomic-embed-text',
    sourceProperties: ['summary', 'errorCode'],
  }),
})

const incidents = client.collections.get('Incident')

await incidents.data.insertMany([
  {
    summary:
      'Core switch SFP module failure leading to intermittent packet loss.',
    errorCode:
      'ETH_ERR_042',
    deviceType:
      'Cisco Nexus',
    resolution:
      'Replaced SFP module in port Gi0/1 and cleaned fiber connectors.',
  },
  {
    summary:
      'BGP session flap caused by MTU mismatch on the peer link.',
    errorCode:
      'BGP_ADJ_DOWN',
    deviceType:
      'Juniper MX',
    resolution:
      'Adjusted MTU to 9100 on both sides of the interface.',
  },
  {
    summary:
      'High CPU utilization due to a localized broadcast storm.',
    errorCode:
      'SYS_CPU_ALARM',
    deviceType:
      'Arista 7050',
    resolution:
      'Identified looping bridge; enabled storm control on VLAN 10.',
  },
])

const event = 'My backbone router is dropping BGP connections, \
might be a packet size issue or something.'

const response = await incidents.query.nearText(
  event,
  {
    limit: 1,
    distance: 0.6,
  },
)

console.log('New event:', event)

if (response.objects.length > 0) {
  const match = response.objects[0].properties
  console.log('Found similar past incident:')
  console.log('Error Code:', match.errorCode)
  console.log('Summary:', match.summary)
  console.log('Resolution:', match.resolution)
} else {
  console.log('No similar incidents found')
}

await client.close()

process.exit(0)
