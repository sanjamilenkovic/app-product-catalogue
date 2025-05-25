import { useGetSingleProductData } from "@/api/products/useGetSingleProductData";
import BaseButton from "@/components/buttons/BaseButton";
import CardWrapper from "@/components/card/CardWrapper";
import { BaseHeader } from "@/components/header/BaseHeader";
import CardInfoChipWithIcon from "@/components/products/singleProductView/CardInfoWithIcon";
import { CategoryCard } from "@/components/products/singleProductView/CategoryCard";
import { SingleDetailInfo } from "@/components/products/singleProductView/detailsCard/SingleDetailInfo";
import SingleReview from "@/components/products/singleProductView/reviews/SingleReview";
import { BaseText } from "@/components/text/BaseText";
import ReadMoreText from "@/components/text/ReadMoreText";
import { mapApiProductToProduct } from "@/data/mappers/mapApiProductToProduct";
import { useLocalStore } from "@/store/localStore";
import { backgroundColors, textColors } from "@/theme/colors";
import { convertToFormattedDate } from "@/utils/dateTime/convertToFormattedDate";
import Icons from "@/utils/icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useCallback } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProductScreen () {

	const router = useRouter()
	const { id } = useLocalSearchParams()

	const { data: currentProduct } = useGetSingleProductData(id.toString())

	const { isFavorite, toggleFavoriteProduct } = useLocalStore()

	const isProductFavorite = useCallback(() => {
		return isFavorite(id.toString())
	}, [id])

	const onEditButtonPressed = () => {
		router.push({
			pathname: '/(protected)/product/edit/[id]',
			params: {
				tags: currentProduct?.tags,
				id: id.toString()
			}
		})
	}

	const onBackButtonPressed = () => {
		router.back()
	}

	return (
		currentProduct &&
		<SafeAreaView style={styles.container}>
			<ScrollView showsVerticalScrollIndicator={false}>
				<BaseHeader
					headline="Project"
					onBackPressed={onBackButtonPressed}
					onTrailingIconPressed={() => {
						toggleFavoriteProduct(mapApiProductToProduct(currentProduct))
					}}
					trailingIcon={isProductFavorite() ? <Icons.HeartFilled /> : <Icons.Heart />} />

				<View style={styles.titleContainer}>
					<BaseText variant="body1" style={styles.date}>{`Created at ${convertToFormattedDate(currentProduct.meta.createdAt)}`}</BaseText>
					<BaseText variant="heading1">{currentProduct.title}</BaseText>
					<ReadMoreText>{currentProduct.description}</ReadMoreText>
				</View>

				<View style={styles.additionalInfo}>
					<CardInfoChipWithIcon
						title="Credit worthy"
						description="Status for provider"
						icon={<Icons.Shield />}
					/>

					<CardInfoChipWithIcon
						title="Deposit paid "
						description="Deposit"
						icon={<Icons.Deposit />}
					/>
				</View>

				<View>
					<BaseText variant="heading2">Details</BaseText>
					<CategoryCard />


					<CardWrapper style={{ marginTop: 20, marginBottom: 32 }}>
						<SingleDetailInfo
							title="Price"
							value={`$${currentProduct.price}`}
						/>
						<SingleDetailInfo
							title="Discount"
							value={`%${currentProduct.discountPercentage}`}
						/>
						<SingleDetailInfo
							title="Rating"
							value={currentProduct.rating}
						/>
						<SingleDetailInfo
							title="Stock"
							value={currentProduct.stock}
						/>
						<SingleDetailInfo
							title="Weight"
							value={currentProduct.weight}
						/>

						<View style={styles.detailInfoContainer}>
							<BaseText style={styles.title}>Tags</BaseText>

							<View style={styles.tagsWrapper}>
								{currentProduct.tags.map((tag, index) => (
									<View key={index} style={styles.tag}>
										<BaseText>{tag}</BaseText>
									</View>
								))}
							</View>
						</View>

						<SingleDetailInfo
							title="Warranty"
							value={currentProduct.warrantyInformation}
							enableBottomBorderRadius
						/>
					</CardWrapper>
				</View>


				<View>
					<BaseText variant="heading2">Reviews</BaseText>
					{currentProduct.reviews.map((review, index) => {
						return (
							<SingleReview
								key={index}
								reviewer={review.reviewerName}
								rating={review.rating}
								comment={review.comment} />
						)

					})}
				</View>

			</ScrollView>

			<View style={styles.buttonContainer}>
				<BaseButton
					label="Edit"
					onPress={
						onEditButtonPressed
					} />
			</View>

		</SafeAreaView>

	);
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 16,
		backgroundColor: backgroundColors.primary
	},
	headerContainer: {
		paddingVertical: 24,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	titleContainer: {
		gap: 8
	},
	date: {
		color: textColors.secondary
	},
	additionalInfo: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingBottom: 32,
	},
	buttonContainer: {
		paddingTop: 16
	},
	detailInfoContainer: {
		padding: 16,
		borderTopStartRadius: 15,
		borderTopEndRadius: 15,
		backgroundColor: backgroundColors.cellPrimary,
		borderBottomWidth: 0.5,
		borderBottomColor: backgroundColors.strokePrimary,
	},
	title: {
		color: textColors.secondary,
		marginBottom: 12,
		fontWeight: '500',
	},
	tagsWrapper: {
		flexDirection: 'row',
		flexWrap: 'wrap',
	},
	tag: {
		backgroundColor: backgroundColors.cellSecondary,
		borderRadius: 8,
		width: '45%',
		paddingHorizontal: 8,
		paddingVertical: 4,
		marginBottom: 8,
		marginEnd: 12
	},
});