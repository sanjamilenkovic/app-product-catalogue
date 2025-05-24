import { useGetSingleProductData } from "@/api/products/useGetSingleProductData";
import BaseButton from "@/components/buttons/BaseButton";
import { BaseHeader } from "@/components/Header";
import CardInfoChipWithIcon from "@/components/products/singleProductView/CardInfoWithIcon";
import { CategoryCard } from "@/components/products/singleProductView/CategoryCard";
import { BaseText } from "@/components/text/BaseText";
import ReadMoreText from "@/components/text/ReadMoreText";
import { backgroundColors, textColors } from "@/theme/colors";
import Icons from "@/utils/icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProductScreen () {

	const { id } = useLocalSearchParams()

	const { data } = useGetSingleProductData(id.toString())

	useEffect(() => {
		console.log(`data ${JSON.stringify(data)}`)
	}, [data])

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
		<SafeAreaView style={styles.container}>

			<ScrollView>

				<BaseHeader
					headline="Project"
					onBackPressed={onBackButtonPressed}
					trailingIcon={<Icons.Heart />} />

				<View style={styles.titleContainer}>
					<BaseText variant="body1" style={styles.date}>Created at Jan 23, 2025</BaseText>
					<BaseText variant="heading1">Product title</BaseText>
					<ReadMoreText>We're looking for a skilled team to build a small commercial office (approx. 200 m²) in downtown LA. The job includes We're looking for a skilled team to build a small commercial office (approx. 200 m²) in downtown LA. The job include"</ReadMoreText>
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

				<View style={styles.detailsContainer}>
					<BaseText variant="heading2">Details</BaseText>
					<CategoryCard />
				</View>



			</ScrollView>

			<BaseButton
				label="Edit"
				onPress={
					onEditButtonPressed
				} />
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
	detailsContainer: {

	}
})