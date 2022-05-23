import { StoreApi } from 'zustand';
declare type ZustandStore = StoreApi<Record<string | number | symbol, any>>;
export declare function mountStoreDevtool(storeName: string, store: ZustandStore, rootElement?: HTMLElement): void;
export {};
