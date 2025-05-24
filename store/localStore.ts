import { Product } from "@/data/Product";
import { create } from 'zustand';

interface AuthStore {
	token: string | null;
	setToken: (token: string) => void;
}

interface ProductsStore {
	favorites: Product[]
	addProductToFavorites: (product: Product) => void;
}

//todo: persist this store
export const useLocalStore = create<AuthStore & ProductsStore>((set) => ({
	token: null,
	setToken: (token) => {
		set({
			token: token
		})
	},
	favorites: [],
	addProductToFavorites: (product: Product) => {
		set((prevState) => {
			const isFavorite = prevState.favorites.some((fav) => fav.id === product.id);

			let updatedFavorites;
			if (isFavorite) {
				// Remove from favorites
				const updatedProduct = { ...product, isFavorite: false }
				updatedFavorites = prevState.favorites.filter((fav) => fav.id !== product.id);
			} else {
				// Add to favorites with isFavorite: true
				const productWithFlag = { ...product, isFavorite: true };
				updatedFavorites = [...prevState.favorites, productWithFlag];
			}

			return {
				favorites: updatedFavorites
			};
		});
	}
})) 