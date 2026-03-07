# CeProMin Strategic Portal

Static web portal for the CeProMin (Argentine Mining Strategic Foresight Center) concept. The site presents a demand-led mining strategy narrative with interactive sections rendered in vanilla HTML, CSS, and JavaScript.

## Stack

- HTML (`index.html`)
- CSS (`styles.css`)
- JavaScript (`script.js`)
- Nginx (containerized)
- Docker Compose for local orchestration

## Run Locally (Recommended)

### Prerequisites

- Docker
- Docker Compose

### Start

```bash
docker compose up --build -d
```

The site is available at:

- `http://localhost:8080/`

### Check Health

```bash
curl http://localhost:8080/health
```

Expected response:

```text
ok
```

### Stop

```bash
docker compose down
```

## Project Structure

- `index.html`: Main page structure and semantic sections.
- `styles.css`: Visual design, responsive layout, and animation styles.
- `script.js`: Content data and DOM rendering/filter behavior.
- `logo.png`: Brand logo used in the header.
- `nginx.conf`: Nginx server configuration with SPA route fallback and `/health` endpoint.
- `Dockerfile`: Static-site image build using `nginx:alpine`.
- `docker-compose.yml`: Local container orchestration (`cepromin` service).

## Notes

- App routes are served with SPA fallback (`try_files ... /index.html`).
- Static JS/CSS assets are configured with short cache headers in Nginx.
