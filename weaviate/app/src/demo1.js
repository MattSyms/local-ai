import { config } from './config.js'
import weaviate, { vectors } from 'weaviate-client'

const client = await weaviate.connectToLocal({
  host: config.weaviateHost,
})

await client.collections.delete('Movie')

await client.collections.create({
  name: 'Movie',
  vectorizers: vectors.text2VecOllama({
    apiEndpoint: config.ollamaUrl,
    model: 'nomic-embed-text',
  }),
})

const movies = client.collections.get('Movie')

await movies.data.insertMany([
  {
    title: 'The Matrix',
    description: 'A computer hacker learns about the true nature of reality and his role in the war against its controllers.',
    genre: 'Science Fiction',
  },
  {
    title: 'Spirited Away',
    description: 'A young girl becomes trapped in a mysterious world of spirits and must find a way to save her parents and return home.',
    genre: 'Animation',
  },
  {
    title: 'The Lord of the Rings: The Fellowship of the Ring',
    description: 'A meek Hobbit and his companions set out on a perilous journey to destroy a powerful ring and save Middle-earth.',
    genre: 'Fantasy',
  },
])

const response = await movies.query.nearText(
  'sci-fi',
  {
    limit: 3,
  },
)

for (const object of response.objects) {
  console.log(JSON.stringify(object.properties, null, 2))
}

await client.close()

process.exit(0)
