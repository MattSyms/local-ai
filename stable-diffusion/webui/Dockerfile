FROM nvidia/cuda:12.4.1-cudnn-devel-ubuntu22.04

ENV DEBIAN_FRONTEND=noninteractive

RUN apt update -y && \
    apt install -y --no-install-recommends software-properties-common && \
    add-apt-repository \
        ppa:deadsnakes/ppa

RUN apt update -y && \
    apt install -y --no-install-recommends \
        git \
        google-perftools \
        libgl1 \
        libglib2.0-0 \
        python3.11 \
        python3.11-venv \
        wget \
        zlib1g

ENV python_cmd="python3.11"

RUN groupadd -g 1000 ubuntu && \
    useradd -u 1000 -g 1000 -m -s /bin/bash ubuntu

USER ubuntu

WORKDIR /home/ubuntu

ENV PATH="/usr/local/cuda/bin:$PATH"

RUN wget -q https://raw.githubusercontent.com/AUTOMATIC1111/stable-diffusion-webui/master/webui.sh && \
    chmod +x webui.sh && \
    ./webui.sh \
        --exit \
        --skip-torch-cuda-test \
        --no-download-sd-model

CMD [ \
    "./webui.sh", \
        "--listen", \
        "--data", "./data", \
        "--no-download-sd-model", \
        "--xformers" \
]
