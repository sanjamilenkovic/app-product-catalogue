import { Product } from "@/data/Product"
import { fontSizes } from "@/utils/dimensions"
import Icons from "@/utils/icons"
import React from "react"
import { StyleSheet, View } from "react-native"
import IconButtonSmall from "../../buttons/IconButtonSmall"
import { BaseText } from "../../text/BaseText"
import { ProductsList } from "./ProductsList"

interface ProductsSectionProps {
	data: Product[]
	headline: string,
	onFavoriteButtonPressed: (product: Product) => void;
	onProductPressed: (product: Product) => void;
	onViewAllButtonPressed: () => void
}

function ProductsSection ({ headline, onProductPressed, onFavoriteButtonPressed, onViewAllButtonPressed, data }: ProductsSectionProps) {

	return (
		<View>
			<View style={styles.topSectionContainer}>
				<BaseText style={styles.title}>{headline}</BaseText>
				<IconButtonSmall label="View all" icon={<Icons.Arrow height={12} width={12} transform={[{ rotateY: '180deg' }]} />} onPress={onViewAllButtonPressed} />
			</View>

			<ProductsList
				isHorizontal
				data={data}
				onFavoriteButtonPressed={onFavoriteButtonPressed}
				onProductPressed={onProductPressed}
			/>
		</View>
	)

}

const styles = StyleSheet.create({
	topSectionContainer: {
		paddingHorizontal: 16,
		flexDirection: "row",
		justifyContent: 'space-between',
	},
	title: {
		fontSize: fontSizes.heading2,
	}
})

export default React.memo(ProductsSection)