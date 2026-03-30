# OpenHands

| Service    | Docker URL        | Local URL                                 |
| ---------- | ----------------- | ----------------------------------------- |
| OpenHands  | `openhands:3000`  | [localhost:3000](http://localhost:3000)   |
| vLLM       | `vllm:8000`       | [localhost:8000](http://localhost:8000)   |

Models: https://huggingface.co/models

Pull runtime image:

```
docker pull ghcr.io/all-hands-ai/runtime:main-nikolaik
```

Deploy stack:

```
docker compose up -d
```

## TODO

- vLLM v0.6.4 or latest
