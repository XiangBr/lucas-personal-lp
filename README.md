# Lucas Ma Famg · Links (Liga da IA)

Personal LP da bio do Instagram, no padrão visual da Liga da IA (League Spartan, modo escuro, Jade `#1DBF85`, partículas Three.js).

- `public/` — site estático (`index.html`, `style.css`, `script.js`, `fotos/`)
- Layout responsivo: coluna única no mobile; duas colunas (perfil + sobre | links) a partir de 1024px.

## Rodar local

```bash
npx serve public
```

## Publicar (Cloudflare Workers — static assets)

O `wrangler.jsonc` já aponta os assets para `./public`.

```bash
npx wrangler deploy
```

Ou conecte o repo em **Workers & Pages → Create → Import a repository** (build command vazio, deploy command `npx wrangler deploy`) e adicione o custom domain (ex.: `lucas.ligadaia.com`).
