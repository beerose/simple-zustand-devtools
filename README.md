# simple-zustand-devtools

Inspect your [zustand](https://github.com/react-spring/zustand) store in React DevTools 🐻⚛️

<img width="500" src="/assets/devtools.png"/>

## Usage

```ts
import create from 'zustand';
import { mountStoreDevtool } from 'simple-zustand-devtools';

export const useStore = create(set => {
  // create your zustand store here
});

if (process.env.NODE_ENV === 'development') {
  mountStoreDevtool('Store', useStore);
}
```

### Mount more than one store

`mountStoreDevtool` creates a new HTML element with `id`: `simple-zustand-devtools-${storeName}`, where `storeName` is a name provided as the first argument. You can mount more than one store, as long as store names remain unique. For example:

```ts
import create from 'zustand';
import { mountStoreDevtool } from 'simple-zustand-devtools';

export const useStore1 = create((set, get) => {
  // create your zustand store here
});

export const useStore2 = create((set, get) => {
  // create your zustand store here
});

if (process.env.NODE_ENV === 'development') {
  mountStoreDevtool('Store1', useStore1);

  mountStoreDevtool('Store2', useStore2);
}
```

## Installation

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
