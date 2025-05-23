import { Product } from "@/data/Product";
import { backgroundColors, colors, textColors } from "@/theme/colors";
import { fontSizes } from "@/utils/dimensions";
import Icons from "@/utils/icons";
import { StyleSheet, View } from "react-native";
import { BaseText } from "../text/BaseText";
import CardSingleInfo from "./CardSingleInfo";

interface ProductCardProps {
	product: Product
}

function ProductCard ({ product }: ProductCardProps) {
	return (
		<View style={styles.cardContainer}>
			<View style={styles.contentContainer}>
				<View style={styles.headlineContainer}>
					<BaseText style={styles.title}>{product.title}</BaseText>
					<Icons.Heart />

				</View>

				<View style={styles.divider} />

				<BaseText style={styles.description} numberOfLines={2}>{product.description}</BaseText>

				<CardSingleInfo label="Category" value={product.category} />
				<CardSingleInfo label="Rating" value={product.rating} />
				<CardSingleInfo label="Brand" value={product.brand} />
			</View>


			<View style={styles.footerContainer}>
				<View>
					<BaseText style={styles.footerLabel}>{product.price}</BaseText>
					<BaseText style={styles.footerValue}>/price</BaseText>
				</View>

				<View style={styles.footerSingleInfo}>
					<BaseText style={styles.footerLabel}>{product.stock}</BaseText>
					<BaseText style={styles.footerValue}>/in stock</BaseText>
				</View>
			</View>

		</View>
	)
}

const styles = StyleSheet.create({
	cardContainer: {
		backgroundColor: backgroundColors.cellPrimary,
		paddingTop: 16,
		marginTop: 16,
		borderRadius: 15,
		width: 324 //TODO: should be dynamic?
	},
	contentContainer: {
		paddingHorizontal: 16,
	},
	headlineContainer: {
		flexDirection: "row",
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingBottom: 12,
	},
	divider: {
		height: 1,
		backgroundColor: backgroundColors.strokePrimary,
		marginBottom: 12,
	},
	title: {
		fontWeight: '500',
		fontSize: fontSizes.body1,
		color: textColors.primary
	},
	description: {
		color: textColors.secondary,
		marginBottom: 12,
	},
	footerContainer: {
		backgroundColor: backgroundColors.cellSecondary,
		paddingHorizontal: 16,
		paddingVertical: 15,
		borderRadius: 15,
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	footerSingleInfo: {
		alignItems: 'flex-end'
	},
	footerLabel: {
		color: colors.blue,
		fontSize: fontSizes.heading3,
	},
	footerValue: {
		color: textColors.secondary,
		fontSize: fontSizes.body1,
	}
})

export default ProductCard
