FROM nvidia/cuda:12.4.1-cudnn-devel-ubuntu22.04

# set shell
SHELL ["/bin/bash", "-c"]

# install dependencies
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

# create user
RUN groupadd -g 1000 ubuntu && \
    useradd -u 1000 -g 1000 -m -s /bin/bash ubuntu

# set user
USER ubuntu

# set workdir
WORKDIR /home/ubuntu

# install cuda
ENV PATH="/usr/local/cuda/bin:$PATH"

# install webui
RUN wget -q https://raw.githubusercontent.com/AUTOMATIC1111/stable-diffusion-webui/master/webui.sh && \
    chmod +x webui.sh && \
    ./webui.sh \
        --exit \
        --skip-torch-cuda-test \
        --no-download-sd-model

# set cmd
CMD ["bash", "./webui.sh", "--listen", "--xformers"]
