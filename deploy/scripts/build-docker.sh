#!/usr/bin/env bash

set -e

REGISTRY_URL="registry.gitlab.com"
PROJECT_PATH="techmely/handbook"
DOCKER_COMPOSE_BASE_PATH="./deploy/docker-compose"
IMAGE_NAME="$REGISTRY_URL/$PROJECT_PATH"

PORT=5000

get_docker_compose_file() {
  local env=$1
  echo "${DOCKER_COMPOSE_BASE_PATH}.${env}.yml"
}

update_image_version() {
  local file_path=$1
  # [^[:space:]]*: Pattern match any character that is not a space (space, tab, newline), repeated 0 or more times
  # If $GITHUB_REF_NAME=production-0.2.4, it will replace production-0.2.3 with production-0.2.4
  # If $GITHUB_REF_NAME=development-0.2.3, it will replace production-0.2.3 with development-0.2.3
  sed -i "s/\(registry\.gitlab\.com\/techmely\/handbook:\)[^[:space:]]*/\1$GITHUB_REF_NAME/g" "$file_path"
  echo "Update version in $file_path successfully"
}

echo "$GITLAB_REGISTRY_TOKEN" | docker login "http://${REGISTRY_URL}" -u "$GITLAB_REGISTRY_USER" --password-stdin

if [ ! -f .env ]; then
  touch .env
fi

env_vars=(
  "PORT=$PORT"
  "NODE_ENV=production"
  "NEXT_PUBLIC_NODE_ENV=production"
  "NEXT_PUBLIC_APP_VERSION=$GITHUB_REF_NAME"
  "NEXT_PUBLIC_BASE_API_URL=$NEXT_PUBLIC_BASE_API_URL"
  "NEXT_TELEMETRY_DISABLED=1"
  "NEXT_PUBLIC_ALGOLIA_APP_ID=$NEXT_PUBLIC_ALGOLIA_APP_ID"
  "NEXT_PUBLIC_ALGOLIA_API_KEY=$NEXT_PUBLIC_ALGOLIA_API_KEY"
  "NEXT_PUBLIC_ALGOLIA_INDEX=$NEXT_PUBLIC_ALGOLIA_INDEX"
)

# Add environment variables to .env file if they do not already exist
for env_var in "${env_vars[@]}"; do
  if ! grep -q "^${env_var%%=*}=" .env; then
    echo "$env_var" >> .env
  fi
done

echo "Add environment variables to .env file successfully"

echo "Start update version in docker-compose files"

update_image_version "$(get_docker_compose_file "production")"
update_image_version "$(get_docker_compose_file "local")"

echo "Update version in docker-compose files successfully"

echo "Start build docker image"

docker compose --env-file .env -f "$(get_docker_compose_file "local")" build

echo "Start push image to Gitlab Registry"

FULL_IMAGE_NAME="${IMAGE_NAME}:${GITHUB_REF_NAME}"
docker push "$FULL_IMAGE_NAME"
