import { useProducts } from "@/api/products/useGetAllProducts";
import LabeledInput from "@/components/inputs/LabeledInput";
import ProductsSection from "@/components/products/ProductsSection";
import { BaseText } from "@/components/text/BaseText";
import { Product } from "@/data/Product";
import { colors } from "@/theme/colors";
import { fontSizes } from "@/utils/dimensions";
import Icons from "@/utils/icons";
import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function OverviewScreen () {

	const { top } = useSafeAreaInsets();

	const { data, isLoading, error } = useProducts()
	const [newProducts, setNewProducts] = useState<Product[]>([])
	const [favoriteProducts, setFavoriteProducts] = useState<Product[]>([])

	useEffect(() => {
		if (data?.products) {
			data.products.map((product) => {
				setNewProducts((prev) => [...prev, {
					brand: product.brand,
					category: product.category,
					description: product.description,
					id: product.id.toString(),
					price: product.price,
					rating: product.rating,
					stock: product.stock,
					title: product.title
				}])
			})
		}
	}, [data])

	const onAllProductsPressed = () => {

	}

	const onAllFavoritesPressed = () => {

	}

	return (
		<ScrollView style={[styles.container, { paddingTop: top }]}>

			<View style={styles.topSectionContainer}>
				<View style={styles.creditsContainer}>
					<View style={styles.coinHolder}>
						<Icons.Coin />
					</View>
					<BaseText style={styles.creditsText}>512 credits</BaseText>
				</View>

				<Icons.Notification />
			</View>

			<LabeledInput icon={<Icons.Search />} label="" placeholder="Search for products" />

			<ProductsSection
				data={newProducts}
				headline="New products"
				onButtonPress={onAllProductsPressed} />

			<ProductsSection
				data={favoriteProducts}
				headline="Favorite products"
				onButtonPress={onAllFavoritesPressed} />

		</ScrollView>
	);
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	topSectionContainer: {
		//backgroundColor: "red",
		flexDirection: "row",
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingTop: 24,
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
	}
}) 