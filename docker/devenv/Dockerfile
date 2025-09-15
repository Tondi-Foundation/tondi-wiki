# syntax=docker/dockerfile:1

FROM ubuntu:24.04
SHELL ["/bin/bash", "-c"]

ARG SHELL
ARG WORKDIR
ARG DK_USER

ARG DEBIAN_FRONTEND=noninteractive
RUN apt-get update && apt install -y sudo

# sudo user
# RUN useradd -rmU ${DK_USER} -u 1000 -G sudo
RUN sed -i 's|%sudo.ALL=(ALL:ALL).ALL|%sudo ALL=(ALL:ALL) NOPASSWD: ALL|' /etc/sudoers

# Timezone & loacale
RUN apt-get update && apt-get install -y locales tzdata
RUN localedef -i en_US -c -f UTF-8 -A /usr/share/locale/locale.alias en_US.UTF-8

# Common tools
RUN apt-get update && apt-get install -y ca-certificates curl vim git git-lfs

COPY init.sh /init.sh
COPY entrypoint.sh /entrypoint.sh

ENV LANG=en_US.utf8
ENV SHELL=${SHELL}

WORKDIR ${WORKDIR}
USER ${DK_USER}

# Init
RUN /init.sh

ENTRYPOINT ["/entrypoint.sh"]
