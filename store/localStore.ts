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

export const useLocalStore = create<AuthStore & ProductsStore>((set) => ({
	token: null,
	setToken: (token) => {
		set({
			token: token
		})
	},
	favorites: [],
	addProductToFavorites: (product: Product) => {
		set((prevState) => ({
			favorites: [...prevState.favorites, product]
		}))
	}
})) 