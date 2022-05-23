'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var client = require('react-dom/client');

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
//# sourceMappingURL=simple-zustand-devtools.cjs.development.js.map
