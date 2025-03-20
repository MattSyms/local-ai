# AI

| Stack  | Service    | Docker URL        | Local URL                                 |
| ------ | ---------- | ----------------- | ----------------------------------------- |
| ollama | Ollama     | `ollama:11434`    | [localhost:11434](http://localhost:11434) |
| ollama | Open WebUI | `open-webui:8080` | [localhost:8080](http://localhost:8080)   |

## Ollama

Deploy stack

```
cd ollama
docker compose up -d
```

Get a shell from the Ollama container:

```
docker compose exec ollama bash
```

Ollama commands:

```
ollama list
ollama pull <model>
ollama rm <model>
```
