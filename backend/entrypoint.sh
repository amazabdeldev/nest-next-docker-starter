#!/bin/sh

set -e

echo "📂 Current working directory: $(pwd)"
echo "🛠️  Running in $NODE_ENV mode..."

if [ "$NODE_ENV" = "development" ]; then

    echo "\n🚀 Starting NestJs Server in development mode...\n"

    if [ ! -f "package.json" ]; then

        echo "❌ Error: package.json not found in $(pwd)!"

        echo "Make sure your volume mapping in docker-compose is correct."

        exit 1

    fi

    if [ ! -d "node_modules" ]; then

        echo "📦 node_modules missing. Installing dependencies..."

        npm ci

        echo "\n✅ Dependencies installed successfully.\n"

    fi
elif [ "$NODE_ENV" = "production" ]; then

    echo "\n🚀 Starting NestJs in production mode...\n"

fi

exec "$@"


