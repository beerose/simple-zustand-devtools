(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('react-dom/client')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react', 'react-dom/client'], factory) :
  (global = global || self, factory(global['simple-zustand-devtools'] = {}, global.React, global.client));
}(this, function (exports, React, client) { 'use strict';

  var React__default = 'default' in React ? React['default'] : React;

  function mountStoreDevtool(storeName, store, rootElement) {
      const externalUpdates = {
          count: 0,
      };
      const ZustandDevtool = props => {
          const allUpdatesCount = React.useRef(externalUpdates.count);
          React.useEffect(() => {
              allUpdatesCount.current += 1;
              if (allUpdatesCount.current === externalUpdates.count + 1) {
                  allUpdatesCount.current -= 1;
                  // DevTools update
                  store.setState(props);
              }
          });
          return null;
      };
      ZustandDevtool.displayName = `((${storeName})) devtool`;
      if (!rootElement) {
          let root = document.getElementById(`simple-zustand-devtools-${storeName}`);
          if (!root) {
              root = document.createElement('div');
              root.id = `simple-zustand-devtools-${storeName}`;
          }
          document.body.appendChild(root);
          rootElement = root;
      }
      const newRoot = client.createRoot(rootElement);
      const renderDevtool = (state) => {
          if (!state) {
              return;
          }
          // render(<ZustandDevtool {...state} />, rootElement!);
          newRoot.render(React__default.createElement(ZustandDevtool, Object.assign({}, state)));
          externalUpdates.count += 1;
      };
      renderDevtool(store.getState());
      store.subscribe(renderDevtool);
  }

  exports.mountStoreDevtool = mountStoreDevtool;

}));
//# sourceMappingURL=simple-zustand-devtools.umd.development.js.map
