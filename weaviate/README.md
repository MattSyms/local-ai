# Weaviate

| Service       | Docker URL       | Local URL                                 |
| ------------- | ---------------- | ----------------------------------------- |
| App           | `app:3000`       | [localhost:3000](http://localhost:3000)   |
| Ollama        | `ollama:11434`   | [localhost:11434](http://localhost:11434) |
| Weaviate HTTP | `weaviate:8080`  | [localhost:8080](http://localhost:8080)   |
| Weaviate gRPC | `weaviate:50051` | [localhost:50051](http://localhost:50051) |

Deploy stack:

```
docker compose up -d
```

Pull the `nomic-embed-text` model:

```
docker compose exec ollama ollama pull nomic-embed-text
```

Get a shell from the App container:

```
docker compose exec app bash
```
