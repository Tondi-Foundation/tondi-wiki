#!/bin/bash

set -e

source ~/.nvm/nvm.sh
COREPACK_ENABLE_DOWNLOAD_PROMPT=0 CI=true pnpm install && pnpm build

bash
