# OpenHands

| Service    | Docker URL        | Local URL                                 |
| ---------- | ----------------- | ----------------------------------------- |
| OpenHands  | `openhands:3000`  | [localhost:3000](http://localhost:3000)   |
| vLLM       | `vllm:8000`       | [localhost:8000](http://localhost:8000)   |

Models: https://huggingface.co/models

Create and customize `.env` file:

```
cp .env.sample .env
```

Deploy stack:

```
docker compose up -d
```
