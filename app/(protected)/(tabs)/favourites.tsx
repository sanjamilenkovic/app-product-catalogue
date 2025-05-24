import { ProductsList } from "@/components/products/productCard/ProductsList";
import { BaseText } from "@/components/text/BaseText";
import { useLocalStore } from "@/store/localStore";
import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function FavouritesScreen () {

	const { top } = useSafeAreaInsets()
	const { favorites } = useLocalStore()
	//const { productsData } = useGetProducts()

	const onFavoriteButtonPressed = () => {

	}


	const onProductPressed = () => {

	}

	return (
		<View style={[styles.container, { marginTop: top }]}>

			<BaseText variant="heading1" style={styles.title}>Favorites</BaseText>

			<ProductsList
				data={favorites}

				onFavoriteButtonPressed={onFavoriteButtonPressed}
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