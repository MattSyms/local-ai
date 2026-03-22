# Local AI Docker Stacks

## NVIDIA

Drivers: https://documentation.ubuntu.com/server/how-to/graphics/install-nvidia-drivers/index.html

Container Toolkit: https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/latest/install-guide.html

## Docker

| Stack              | Service    | Docker URL        | Local URL                                 |
| ------------------ | ---------- | ----------------- | ----------------------------------------- |
| `ollama`           | Ollama     | `ollama:11434`    | [localhost:11434](http://localhost:11434) |
| `ollama`           | Open WebUI | `open-webui:8080` | [localhost:8080](http://localhost:8080)   |
| `stable-diffusion` | WebUI      | `webui:7860`      | [localhost:7860](http://localhost:7860)   |

## Ollama

Models: https://ollama.com/search

Deploy stack:

```
cd ollama
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

## Stable Diffusion

Models:

- https://huggingface.co/stabilityai/stable-diffusion-xl-base-1.0
- https://huggingface.co/stabilityai/stable-diffusion-xl-refiner-1.0

Deploy stack:

```
cd stable-diffusion
docker compose up -d
```

Models directory: `webui/data/models/Stable-diffusion`
