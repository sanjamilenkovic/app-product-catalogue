import { Product } from "@/data/Product";
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { zustandMMKVStorage } from "./mmkv";

interface AuthStore {
	token: string | null;
	setToken: (token: string) => void;
}

interface FavoritesStore {
	favorites: Product[]
	isFavorite: (id: string) => boolean;
	toggleFavoriteProduct: (product: Product) => void;
}

export const useLocalStore = create<AuthStore & FavoritesStore>()(
	persist(
		(set, get) => ({
			token: null,
			setToken: (token) => {
				set({ token });
			},

			favorites: [],
			isFavorite: (id) => get().favorites.some((fav) => fav.id === id),
			toggleFavoriteProduct: (product: Product) => {
				const existing = get().favorites;
				const isFavorite = existing.some((fav) => fav.id === product.id);

				let updatedFavorites;
				if (isFavorite) {
					updatedFavorites = existing.filter((fav) => fav.id !== product.id);
				} else {
					updatedFavorites = [...existing, { ...product, isFavorite: true }];
				}

				set({ favorites: updatedFavorites });
			},
		}),
		{
			name: 'product-catalogue-storage',
			storage: createJSONStorage(() => zustandMMKVStorage)
		}
	)
);