import { HeartButton } from "@/components/buttons/animated/HeartButton";
import { Product } from "@/data/Product";
import { backgroundColors, colors, textColors } from "@/theme/colors";
import { fontSizes } from "@/utils/dimensions";
import { Pressable, StyleSheet, View } from "react-native";
import { BaseText } from "../../text/BaseText";
import CardSingleInfo from "./CardSingleInfo";

interface ProductCardProps {
	product: Product
	onFavoriteButtonPressed: () => void;
	onProductPressed: (productID: string) => void;
}

function ProductCard ({ product, onProductPressed, onFavoriteButtonPressed }: ProductCardProps) {
	return (
		<Pressable style={styles.cardContainer} onPress={() => onProductPressed(product.id)}>
			<View style={styles.contentContainer}>

				<View style={styles.headlineContainer}>
					<View style={{ flex: 1 }}>
						<BaseText variant="body1" numberOfLines={1}>{product.title}</BaseText>
					</View>
					<Pressable onPress={onFavoriteButtonPressed}>
						<HeartButton isFavorite={product.isFavorite} />
					</Pressable>
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

		</Pressable>
	)
}

const styles = StyleSheet.create({
	cardContainer: {
		backgroundColor: backgroundColors.cellPrimary,
		paddingTop: 16,
		marginTop: 16,
		borderRadius: 15,
	},
	contentContainer: {
		marginHorizontal: 16,
	},
	headlineContainer: {
		flex: 1,
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
	description: {
		color: textColors.secondary,
		marginBottom: 12,
	},
	footerContainer: {
		backgroundColor: backgroundColors.cellSecondary,
		paddingHorizontal: 16,
		paddingVertical: 15,
		borderBottomEndRadius: 15,
		borderBottomStartRadius: 15,
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
