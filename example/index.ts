import create from 'zustand';
import { mountStoreDevtool } from '../src';

export const useStore1 = create((_set, _get) => {
  return {};
});

export const useStore2 = create((_set, _get) => {
  return {};
});

if (process.env.NODE_ENV === 'development') {
  mountStoreDevtool('Store1', useStore1);

  mountStoreDevtool('Store2', useStore2);
}
