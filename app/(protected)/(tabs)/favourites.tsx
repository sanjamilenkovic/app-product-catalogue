import { ProductsList } from "@/components/products/productCard/ProductsList";
import { BaseText } from "@/components/text/BaseText";
import { Product } from "@/data/Product";
import { useLocalStore } from "@/store/localStore";
import { useRouter } from "expo-router";
import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function FavouritesScreen () {

	const router = useRouter()

	const { top } = useSafeAreaInsets()
	const { favorites, addProductToFavorites } = useLocalStore()

	const onProductPressed = (product: Product) => {
		router.push({
			pathname: "/(protected)/product/[id]",
			params: {
				id: product.id
			}
		})
	}

	return (
		<View style={[styles.container, { marginTop: top }]}>

			<BaseText variant="heading1" style={styles.title}>Favorites</BaseText>

			<ProductsList
				data={favorites}
				onFavoriteButtonPressed={addProductToFavorites}
				onProductPressed={onProductPressed}
			/>

		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 16,
	},
	title: {
		paddingBottom: 16
	}
})