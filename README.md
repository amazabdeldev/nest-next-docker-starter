# Nest-Next Docker Starter 🚀

A professional, production-ready boilerplate for building full-stack applications using **NestJS**, **Next.js**, and **PostgreSQL**, all orchestrated with **Docker Compose**.

## 🌟 Features

- **Full Dockerization**: Independent containers for Backend, Frontend, and Database.
- **Dynamic Infrastructure**: No hardcoded container or network names, allowing multiple instances of the project to run simultaneously without conflicts.
- **Smart Healthchecks**: The backend waits for the database to be fully "Healthy" before starting, using a custom Node.js script.
- **Environment Isolation**: Separate configurations for Development and Production environments.
- **Optimized Performance**: Multi-stage builds for smaller and faster production images.

---

## 🛠️ Prerequisites

- **Docker** and **Docker Compose** installed.
- **Node.js** (optional, for local development).

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone [https://github.com/amazabdeldev/nest-next-docker-starter.git](https://github.com/amazabdeldev/nest-next-docker-starter.git)
cd nest-next-docker-starter
```

### 2. Set up Environment Variables
Copy the example environment file and adjust it as needed: 
```bash
cp ./backend/.env.development.example ./backend/.env.development
```
### 3. Start the Application
```bash
docker compose \
  -f compose.yml \
  -f compose.dev.yml \
  --env-file ./backend/.env.development \
  up -d --build 
```
### 4. Project Structure
* `backend/`: NestJS source code and Docker configuration.
* `db/`: Volume for PostgreSQL data persistence.
* `compose.yml`: Base infrastructure configuration.
* `compose.dev.yml`: Development overrides (Volumes, Hot-reload).
* `compose.prod.yml`: Production optimizations and security.

---

## 🔧 Dynamic Configuration
This starter is **Folder-Independent**. You can run multiple instances by simply changing the ports in your `.env` file to avoid macOS port conflicts:

```env
# Instance 1
PORT=3000
DB_PORT=5432

# Instance 2
PORT=3001
DB_PORT=5433
```

## 📝 License
This project is open-source and available under the **MIT License**.

## Maintained by [amazabdeldev](https://github.com/amazabdeldev)