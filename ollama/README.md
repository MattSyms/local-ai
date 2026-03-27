# Ollama

| Service    | Docker URL        | Local URL                                 |
| ---------- | ----------------- | ----------------------------------------- |
| Ollama     | `ollama:11434`    | [localhost:11434](http://localhost:11434) |
| Open WebUI | `open-webui:8080` | [localhost:8080](http://localhost:8080)   |

Models: https://ollama.com/search

Deploy stack:

```
docker compose up -d
```

Get a shell from the Ollama container:

```
docker compose exec ollama bash
```

Commands:

```
ollama list
ollama pull <model>
ollama rm <model>
```
