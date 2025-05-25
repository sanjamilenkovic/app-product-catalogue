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
import { useLocalStore } from "@/store/localStore";
import { backgroundColors, textColors } from "@/theme/colors";
import Icons from "@/utils/icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProductScreen () {

	const { id } = useLocalSearchParams()

	const { data: product } = useGetSingleProductData(id.toString())

	const { addProductToFavorites } = useLocalStore()

	const router = useRouter()

	const onEditButtonPressed = () => {
		router.push({
			pathname: '/(protected)/product/edit/[id]',
			params: {
				id: id.toString()
			}
		})
	}

	const onBackButtonPressed = () => {
		router.back()
	}

	return (
		product &&
		<SafeAreaView style={styles.container}>

			<ScrollView showsVerticalScrollIndicator={false}>

				<BaseHeader
					headline="Project"
					onBackPressed={onBackButtonPressed}
					onTrailingIconPressed={() => {
						//TODO:
					}}
					trailingIcon={<Icons.Heart />} />

				<View style={styles.titleContainer}>
					<BaseText variant="body1" style={styles.date}>Created at Jan 23, 2025</BaseText>
					<BaseText variant="heading1">{product.title}</BaseText>
					<ReadMoreText>{product.description}</ReadMoreText>
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
							value={`$${product.price}`}
						/>
						<SingleDetailInfo
							title="Discount"
							value={`%${product.discountPercentage}`}
						/>
						<SingleDetailInfo
							title="Rating"
							value={product.rating}
						/>
						<SingleDetailInfo
							title="Stock"
							value={product.stock}
						/>
						<SingleDetailInfo
							title="Weight"
							value={product.weight}
						/>
						<SingleDetailInfo
							title="Warranty"
							value={product.warrantyInformation}
							enableBottomBorderRadius
						/>
					</CardWrapper>
				</View>


				<View>
					<BaseText variant="heading2">Reviews</BaseText>
					{product.reviews.map(review => {
						return (
							<SingleReview
								key={`${review.reviewerName}-${review.date}-${review.rating}`}
								reviewer={review.reviewerName}
								rating={review.rating}
								comment={review.comment} />
						)

					})}
				</View>

			</ScrollView>

			<View style={{ paddingTop: 16 }}>
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
	}
})