#!/bin/bash

# This script builds a Docker image and runs Playwright E2E tests within a container.

# Exit immediately if a command exits with a non-zero status.
set -e

# Define the name for the Docker image.
readonly IMAGE_NAME="next-cloudflare-blog-e2e"

# Build the Docker image.
# The "." specifies that the build context is the current directory.
echo "Building Docker image: ${IMAGE_NAME}..."
docker build -t "${IMAGE_NAME}" .

# Run the Playwright tests inside the Docker container.
# --rm: Automatically remove the container when it exits.
# --ipc=host: Required for Playwright's browser instances to work correctly.
echo "Running Playwright tests..."
docker run -v ./tests/e2e/navigation.spec.ts-snapshots/:/app/tests/e2e/navigation.spec.ts-snapshots/ --rm --ipc=host "${IMAGE_NAME}"

echo "E2E tests finished successfully."
