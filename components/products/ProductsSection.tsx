import { Product } from "@/data/Product"
import { fontSizes } from "@/utils/dimensions"
import Icons from "@/utils/icons"
import { FlatList, StyleSheet, View } from "react-native"
import IconButtonSmall from "../buttons/IconButtonSmall"
import { BaseText } from "../text/BaseText"
import ProductCard from "./ProductCard"

interface ProductsSectionProps {
	data: Product[]
	headline: string,
	onButtonPress: () => void
}

function ProductsSection ({ headline, onButtonPress, data }: ProductsSectionProps) {
	return (
		<View style={styles.productsContainer}>
			<View style={styles.topSectionContainer}>
				<BaseText style={styles.title}>{headline}</BaseText>
				<IconButtonSmall label="View all" icon={<Icons.Arrow height={12} width={12} />} onPress={onButtonPress} />
			</View>

			<FlatList
				data={data}
				renderItem={({ item }: { item: Product }) => {
					return (
						<ProductCard product={item} />
					)
				}}
				removeClippedSubviews={true}
				horizontal
				showsHorizontalScrollIndicator={false}
				keyExtractor={(item) => item.id.toString()} />


		</View>
	)

}

const styles = StyleSheet.create({
	productsContainer: {
		paddingHorizontal: 16,
		marginTop: 40,
	},
	topSectionContainer: {
		flexDirection: "row",
		justifyContent: 'space-between',
	},
	title: {
		fontSize: fontSizes.heading2,
	}
})

export default ProductsSection