# React + TypeScript + Vite

project using `npm`, use `nvm use` to be sure you are using same node version.

## Commands

- `npm run dev` -> Start local dev
- `npm run build` -> produce production build (creates dist/ folder)
- `npm run lint` -> Lint JS and TS files/rules
- `npm run spell` -> run spellcheck - avoid typos

## ENV / Config

| Variable          | Example Value    | Description                                           |
| ----------------- | ---------------- | ----------------------------------------------------- |
| VITE_APP_PORT     | 3000             | Dev server port `localhost:PORT`                      |
| VITE_APP_API_PATH | /api             | Api url (can be same as api server url in production) |
| VITE_API_PROXY    | dev.valllue.tech | Choose dev server url                                 |

- Same domain [here](/docs/sameDomain.md)

## Tech. decisions

### Localization

- preferred format [Intl](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl)
- [react-intl](https://formatjs.io/docs/getting-started/installation/)
- default language for strings is "Slovak"
- TODO: export translation strings - not needed
