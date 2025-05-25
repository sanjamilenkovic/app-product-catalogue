import { MMKV } from 'react-native-mmkv';
import { StateStorage } from "zustand/middleware";

export const persistStore = new MMKV({ id: 'product-catalogue-perstist-storage' });

export const zustandMMKVStorage: StateStorage = {
	setItem: (name, value) => {
		return persistStore.set(name, value);
	},
	getItem: name => {
		const value = persistStore.getString(name);
		return value ?? null;
	},
	removeItem: name => {
		return persistStore.delete(name);
	},
};