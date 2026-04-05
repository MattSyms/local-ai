# OpenHands

| Service      | Docker URL       | Local URL                               |
| ------------ | ---------------- | --------------------------------------- |
| OpenHands    | `openhands:3000` | [localhost:5000](http://localhost:5000) |
| Phoenix      | `phoenix:6006`   | [localhost:5001](http://localhost:5001) |
| vLLM         | `vllm:8000`      | `localhost:8000`                        |
| Phoenix OTLP | `phoenix:4317`   | `localhost:4317`                        |

Models: https://huggingface.co/models

Pull runtime image:

```
docker pull ghcr.io/all-hands-ai/runtime:main-nikolaik
```

Deploy stack:

```
docker compose up -d
```

Create LLM (Advanced):

- Base URL: http://vllm:8000/v1
- Custom Model: openai/Qwen/Qwen2.5-Coder-32B-Instruct-AWQ
- API Key: key
