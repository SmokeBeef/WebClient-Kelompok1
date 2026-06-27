# Mid-Test Web Client Development - Kelompok 1

Company profile website built with TanStack Start (`web`) and Strapi CMS (`cms`).

> **For most members:** you only need to run the **`web`** package locally. Content comes from the **deployed Strapi instance** — you do not need to start Strapi, Postgres, or Docker unless you are working on the CMS itself.

## Members

- Ahmad Muwaffaq
- Anggi Debia Zahra
- Aditya Wardana
- Deva Nanda Alfarizi
- Galih Agung Nurfadhilah

## Prerequisites

- [Node.js](https://nodejs.org/) 20 or newer
- npm (included with Node.js)

Optional: [direnv](https://direnv.net/) + [Nix](https://nixos.org/) — this repo includes a `flake.nix` that provides Node.js automatically when you enter the directory.

## Getting started (web only)

### 1. Clone and install dependencies

From the repository root:

```bash
git clone <repository-url>
cd WebClient-Kelompok1
npm install
```

This installs dependencies for the whole monorepo (`web` and `cms`), but you will only run the frontend locally.

### 2. Configure the deployed Strapi URL

Copy the example env file and point it at the shared production Strapi server (ask a team member for the URL if you do not have it):

```bash
cp web/.env.example web/.env
```

Edit `web/.env` and set both variables to the deployed Strapi base URL **without** `/api`:

```bash
STRAPI_URL=https://your-deployed-strapi.example.com
VITE_STRAPI_URL=https://your-deployed-strapi.example.com
```

- `STRAPI_URL` — used during server-side rendering
- `VITE_STRAPI_URL` — used in the browser (images, client-side requests)

### 3. Start the frontend

From the repository root:

```bash
npm run dev:web
```

Or from the `web` directory:

```bash
cd web
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project structure

```text
WebClient-Kelompok1/
├── web/          # TanStack Start frontend (run this locally)
├── cms/          # Strapi CMS (deployed; optional for local CMS work)
├── compose.yml   # Local Strapi + Postgres (optional)
└── compose.prod.yml
```

## Useful scripts

Run these from the repository root:

| Command | Description |
|---|---|
| `npm run dev:web` | Start the frontend dev server on port 3000 |

From the `web` directory:

| Command | Description |
|---|---|
| `npm run dev` | Start the dev server |
| `npm run build` | Build for production |
| `npm run test` | Run tests |
| `npm run lint` | Lint with Biome |
| `npm run format` | Format with Biome |

## Working on the CMS locally (optional)

Only needed if you are changing Strapi content types, plugins, or CMS configuration — not required for normal frontend development.

1. Copy and fill in `cms/.env` from `cms/.env.example`
2. Start Strapi and Postgres with Docker:

```bash
docker compose up --build
```

- Strapi admin: [http://localhost:1338/admin](http://localhost:1338/admin)
- Point `web/.env` at `http://localhost:1338` while testing against local Strapi

See [`cms/README.md`](cms/README.md) for Strapi-specific commands.

## Production deployment

Production uses Docker Compose with pre-built images. See [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) for the CI/CD pipeline.
