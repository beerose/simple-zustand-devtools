# simple-zustand-devtools

Inspect your [zustand](https://github.com/react-spring/zustand) store in React DevTools 🐻⚛️

## Usage

```ts
import createStore from 'zustand';
import { mountStoreDevtool } from 'simple-zustand-devtools';

export const [useStore, store] = createStore(set => {
  // create your zustand store here
});

if (process.env.NODE_ENV === 'development') {
  mountStoreDevtool('Store', store);
}
```

## Instalation

```sh
yarn add simple-zustand-devtools --dev
```

## Docs

### mountStoreDevtool

```ts
import { StoreApi } from 'zustand';

type ZustandStore = StoreApi<Record<string | number | symbol, any>>;

export function mountStoreDevtool(
  storeName: string,
  store: ZustandStore,
  rootElement?: HTMLElement
): void;
```

## Local Development

Below is a list of commands you will probably find useful.

### `npm start` or `yarn start`

Runs the project in development/watch mode. Project will be rebuilt upon changes.

### `npm run build` or `yarn build`

Bundles the package to the `dist` folder.
The package is optimized and bundled with Rollup into multiple formats (CommonJS, UMD, and ES Module).

### `npm test` or `yarn test`

Runs the test watcher (Jest) in an interactive mode.
By default, runs tests related to files changed since the last commit.
