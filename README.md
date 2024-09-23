# React + TypeScript + Vite

project using `npm`, use `nvm use` to be sure you are using same node version.

## Commands

- `npm run dev` -> Start local dev
- `npm run build` -> produce production build (creates dist/ folder)
- `npm run lint` -> Lint JS and TS files/rules
- `npm run spell` -> run spellcheck - avoid typos TODO: not working with Slovak in CLI

## ENV / Config

| Variable                  | Example Value | Description                                           |
| ------------------------- | ------------- | ----------------------------------------------------- |
| VITE_APP_PORT             | 3000          | Dev server port `localhost:PORT`                      |
| VITE_APP_API_PATH         | /api          | Api url (can be same as api server url in production) |
| VITE_API_PROXY            | dev.org.io    | Choose dev server url                                 |
| VITE_APP_ENABLE_QUERY_DEV | true/false    | Display TanStack query panel                          |

- Same domain [here](/docs/sameDomain.md)

## Tech. decisions

## Code quality

- eslint
- prettier
- tsc
- pre-commit check using lint-staged only for staged files, runs TS / JS linter check + prettier format

### Localization

- preferred format [Intl](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl)
- [react-intl](https://formatjs.io/docs/getting-started/installation/)
- default language for strings is "Slovak"
- TODO: export translation strings - not needed
