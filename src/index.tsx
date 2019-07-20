import React, { useEffect, useRef } from 'react';
import { render } from 'react-dom';
import { StoreApi } from 'zustand';

type ZustandStore = StoreApi<Record<string | number | symbol, any>>;

export function mountStoreDevtool(
  storeName: string,
  store: ZustandStore,
  rootElement?: HTMLElement
) {
  type StoreState = ReturnType<ZustandStore['getState']>;

  const externalUpdates = {
    count: 0,
  };

  const ZustandDevtool: React.FC<StoreState> = props => {
    const allUpdatesCount = useRef(externalUpdates.count);

    useEffect(() => {
      allUpdatesCount.current += 1;
      if (allUpdatesCount.current === externalUpdates.count + 1) {
        allUpdatesCount.current -= 1;

        // DevTools update
        store.setState(props);
      }
    });

    return null;
  };

  (ZustandDevtool as any).displayName = `((${storeName})) devtool`;

  if (!rootElement) {
    let root = document.getElementById('simple-zustand-devtools');
    if (!root) {
      root = document.createElement('div');
      root.id = 'simple-zustand-devtools';
    }

    document.body.appendChild(root);
    rootElement = root;
  }

  const renderDevtool = (state: StoreState | void) => {
    if (!state) {
      return;
    }
    render(<ZustandDevtool {...state} />, rootElement!);
    externalUpdates.count += 1;
  };

  renderDevtool(store.getState());
  store.subscribe(renderDevtool);
}
