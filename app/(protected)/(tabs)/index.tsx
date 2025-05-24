import { CardInvite } from "@/components/card/CardInvite";
import BaseInput from "@/components/inputs/BaseInput";
import ProductsSection from "@/components/products/productCard/ProductsSection";
import { BaseText } from "@/components/text/BaseText";
import { useGetProducts } from "@/hooks/useGetProducts";
import { useLocalStore } from "@/store/localStore";
import { colors } from "@/theme/colors";
import { fontSizes } from "@/utils/dimensions";
import Icons from "@/utils/icons";
import { useRouter } from "expo-router";
import { ScrollView, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function OverviewScreen () {

	const router = useRouter()
	const { top } = useSafeAreaInsets();

	const { productsData } = useGetProducts();
	const { addProductToFavorites, favorites } = useLocalStore()

	const onProductPressed = (productID: string) => {
		router.push({
			pathname: "/(protected)/product/[id]",
			params: {
				id: productID
			}
		})
	}

	const onAllProductsPressed = () => {

	}

	const onAllFavoritesPressed = () => {

	}

	return (
		<ScrollView style={[styles.container, { paddingTop: top }]} contentContainerStyle={{ paddingBottom: 20 }} showsVerticalScrollIndicator={false}>

			<View style={styles.topSectionContainer}>
				<View style={styles.creditsContainer}>
					<View style={styles.coinHolder}>
						<Icons.Coin />
					</View>
					<BaseText style={styles.creditsText}>512 credits</BaseText>
				</View>

				<Icons.Notification />
			</View>

			<BaseInput
				style={styles.searchInput}
				placeholder="Search for products"
				icon={<Icons.Search />} />

			<View style={styles.productsContainer}>
				<ProductsSection
					data={productsData}
					headline="New products"
					onProductPressed={onProductPressed}
					onFavoriteButtonPressed={(product) => {
						addProductToFavorites(product)
					}}
					onViewAllButtonPressed={onAllProductsPressed} />

				{favorites.length > 0 &&
					<ProductsSection
						data={favorites}
						headline="Favorite products"
						onProductPressed={onProductPressed}
						onFavoriteButtonPressed={(product) => addProductToFavorites(product)}
						onViewAllButtonPressed={onAllFavoritesPressed} />}
			</View>



			<CardInvite
				onInviteButtonPressed={() => {
					//todo: open share popup
				}} />

		</ScrollView>
	);
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	topSectionContainer: {
		flexDirection: "row",
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingVertical: 24,
		paddingHorizontal: 16
	},
	creditsContainer: {
		flexDirection: "row",
		backgroundColor: colors.white,
		alignItems: 'center',
		borderRadius: 999,
		paddingLeft: 4,
		paddingRight: 12,
	},
	coinHolder: {
		backgroundColor: colors.primary,
		padding: 8,
		borderRadius: 100,
		marginEnd: 10
	},
	creditsText: {
		fontWeight: '400',
		fontSize: fontSizes.body2,
		paddingVertical: 13
	},
	searchInput: {
		marginHorizontal: 16
	},
	productsContainer: {
		marginVertical: 40,
		gap: 40
	}
}) 