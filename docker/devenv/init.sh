#!/bin/bash

set -e

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash

source ~/.nvm/nvm.sh

nvm install 24
corepack enable pnpm
