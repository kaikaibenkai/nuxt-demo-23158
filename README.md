# Nuxt Demo 23158

[issue](https://github.com/nuxt/nuxt/issues/23158)

Run in Git Bash:

```bash
pnpm i
pnpm dev
```

It's OK, but:

```bash
pnpm build
```

...Error occurred

I also tried to reproduce this issue directly using Vite, but it didn't occur. (see `/vite-project`)

```bash
pnpm vite:dev # start Vite dev server
pnpm vite:build # build Vite server
pnpm vite:dev # preview Vite server
```

(Please forgive my bad English)
