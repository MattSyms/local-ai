# OpenHands

| Service    | Docker URL        | Local URL                                 |
| ---------- | ----------------- | ----------------------------------------- |
| OpenHands  | `openhands:3000`  | [localhost:3000](http://localhost:3000)   |
| vLLM       | `vllm:8000`       | [localhost:8000](http://localhost:8000)   |

Models: https://huggingface.co/models

Pull runtime image:

```
docker pull ghcr.io/all-hands-ai/runtime:0.18.0-nikolaik
```

Create and customize `.env` file:

```
cp .env.sample .env
```

Deploy stack:

```
docker compose up -d
```

Create LLM (Advanced):

- Custom Model: openai/Qwen/Qwen2.5-Coder-32B-Instruct-AWQ
- Base URL: http://vllm:8000/v1
- API Key: key

## TODO

- check openhands extra host
