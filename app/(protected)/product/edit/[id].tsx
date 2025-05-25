import BaseButton from "@/components/buttons/BaseButton";
import { BaseHeader } from "@/components/header/BaseHeader";
import BaseInput from "@/components/inputs/BaseInput";
import { BaseText } from "@/components/text/BaseText";
import { backgroundColors, textColors } from "@/theme/colors";
import Icons from "@/utils/icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function EditProductScreen () {

	const [description, setDescription] = useState<string>()

	const tags = ['Beauty', 'Mascara', 'Tag']

	const { id } = useLocalSearchParams()

	const router = useRouter()

	const onAddTagButtonPressed = () => {

	}

	const onEditButtonPressed = () => {
		router.push({
			pathname: '/(protected)/product/edit/success'
		})
	}

	const onBackButtonPressed = () => {
		router.back()
	}

	return (
		<SafeAreaView style={styles.container}>

			<ScrollView showsVerticalScrollIndicator={false}>
				{/** this can be extracted as separated header component */}
				<BaseHeader
					headline="Edit product"
					onBackPressed={onBackButtonPressed}
				/>

				<View style={styles.titleContainer}>
					<BaseText variant="heading2">
						Edit product
					</BaseText>
				</View>

				<View style={styles.inputsContainer}>
					<BaseInput
						label="Title"
						placeholder="Product title"
						value="Product title"
						isMandatory
					/>

					<BaseInput
						label="Product description"
						placeholder="Product title"
						isMultiline={true}
						value={description}
						onChangeValue={setDescription}
					/>

					<BaseInput
						isEditable={false}
						placeholder="💡 ID of product" />
				</View>

				<View style={styles.tagsContainer}>
					<View style={styles.titleContainer}>
						<BaseText variant="heading2">Tags</BaseText>
					</View>

					{tags.map((item) => {
						return (
							<BaseInput
								key={item}
								label='Tag name'
								value={item}
								placeholder="x"
								isMandatory
								externalTrailingIcon={<Icons.Bin style={{ margin: 14 }} />} />
						)
					})}

					<BaseButton
						label="Add tag +"
						white
						onPress={onAddTagButtonPressed} />
				</View>

				<View style={styles.buttonsContainer}>

					<BaseButton
						label="Back"
						style={{ flex: 1 }}
						white
						onPress={onBackButtonPressed} />

					<BaseButton
						label="Edit"
						style={{ flex: 1 }}
						onPress={
							onEditButtonPressed
						} />
				</View>


			</ScrollView>



		</SafeAreaView>

	);
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: backgroundColors.primary,
		paddingHorizontal: 16,
	},
	headerContainer: {
		paddingVertical: 24,
		paddingHorizontal: 16,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	titleContainer: {
		paddingVertical: 16
	},
	date: {
		color: textColors.secondary
	},
	inputsContainer: {
		gap: 16,
		paddingVertical: 16
	},
	tagsContainer: {
		gap: 16
	},
	buttonsContainer: {
		flex: 1,
		gap: 8,
		marginTop: 58,
		paddingVertical: 16,
		flexDirection: 'row',
	}
})