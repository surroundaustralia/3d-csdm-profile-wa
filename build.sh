#!/bin/bash
# Process building blocks
if [ -f '.volumes' ]; then
  VOLUMES=$(while read -r line; do
    if [[ "${line}" != /* ]]; then
      echo -n "-v ${PWD}/${line} "
    else
      echo -n "-v $line "
    fi
  done < .volumes)
fi

# Use a Windows-style path for Docker when running under Git Bash on Windows.
if command -v cygpath >/dev/null 2>&1; then
  WORKSPACE_DIR="$(cygpath -w "$(pwd)")"
else
  WORKSPACE_DIR="$(pwd)"
fi

MSYS_NO_PATHCONV=1  docker run --pull=always --rm --workdir /workspace -v "$(pwd):/workspace" ${VOLUMES} \
  ghcr.io/opengeospatial/bblocks-postprocess \
  --clean true --base-url http://localhost:9090/register/ "$@"



