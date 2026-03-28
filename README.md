# franzella.dev

My personal website built using:

- Framework: [Next.js](https://nextjs.org/)
- Styling: [Tailwind CSS](https://tailwindcss.com/)
- Hosting: [Vercel](https://vercel.com/)

## Run project

This application is designed to run from Node.js v20 and above.

Setup locally:

```sh
git clone git@github.com:nin93/franzella.dev.git && cd franzella.dev

npm ci
```

Run:

```sh
# Hot reloaded development environment
npm run dev

# Or

# Optimized production build
npm run build
npm run start
```

Open [http://localhost:3000](http://localhost:3000)

### With Docker

Build the images:

```sh
docker compose up
```

This will produce a self-contained, standalone Next.js build for minimal image footprint, proxied under an nginx web server.

The app is now served at [http://localhost:8080](http://localhost:8080)

## License

Copyright 2026 [Elia Franzella](https://www.github.com/nin93/)

This project is [MIT](./LICENSE.md) licensed.
