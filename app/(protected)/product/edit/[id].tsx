import { useGetSingleProductData } from "@/api/products/useGetSingleProductData";
import BaseButton from "@/components/buttons/BaseButton";
import { BaseHeader } from "@/components/header/BaseHeader";
import BaseInput from "@/components/inputs/BaseInput";
import { BaseText } from "@/components/text/BaseText";
import { backgroundColors, textColors } from "@/theme/colors";
import Icons from "@/utils/icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useCallback, useEffect, useMemo, useState } from "react";
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, View } from "react-native";
import Animated, { FadeInUp } from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";

export default function EditProductScreen () {
	const router = useRouter()
	const { id } = useLocalSearchParams()

	const { data: productData } = useGetSingleProductData(id.toString())

	const [title, setTitle] = useState<string>('');
	const [description, setDescription] = useState<string>('')
	const [tags, setTags] = useState<string[]>([])

	useEffect(() => {
		if (productData) {
			setTitle(productData.title)
			setDescription(productData.description)
			setTags(productData.tags)
		}
	}, [productData])

	const onAddTagButtonPressed = useCallback(() => {
		setTags((prevState) => [...prevState, ""]);
	}, []);

	const onRemoveTagButtonPressed = useCallback((index: number) => {
		setTags((prevState) => prevState.filter((_, i) => i !== index));
	}, []);

	const updateTag = useCallback((index: number, newValue: string) => {
		setTags((prev) => prev.map((tag, i) => (i === index ? newValue : tag)));
	}, []);

	const onEditButtonPressed = useCallback(() => {
		router.push({
			pathname: "/(protected)/product/edit/success",
		});
	}, [router]);

	const onBackButtonPressed = useCallback(() => {
		router.back();
	}, [router]);

	const binIcon = useMemo(() => <Icons.Bin style={{ margin: 14 }} />, []);

	return (
		<SafeAreaView style={styles.container}>
			<KeyboardAvoidingView
				behavior={Platform.OS === "ios" ? "padding" : undefined}
				style={styles.keyboardAvoidingContainer}
			>
				<ScrollView showsVerticalScrollIndicator={false} >
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
							value={title}
							onChangeValue={(text) => setTitle(text)}
							isMandatory
						/>

						<BaseInput
							label="Product description"
							placeholder="Product description"
							isMultiline={true}
							value={description}
							onChangeValue={setDescription}
						/>

						<View style={styles.disabledInput}>
							<BaseText variant="body1" style={styles.disabledInputTitle}>💡 ID of product</BaseText>
							<BaseText>{id}</BaseText>
						</View>
					</View>


					<View style={styles.tagsContainer}>
						<View style={styles.titleContainer}>
							<BaseText variant="heading2">Tags</BaseText>
						</View>

						{tags.map((item, index) => {
							return (
								<Animated.View key={index} entering={FadeInUp.duration(400)}>
									<BaseInput
										label="Tag name"
										value={item}
										onChangeValue={(text) => updateTag(index, text)}
										placeholder="Enter tag name"
										isMandatory
										onExternalTrailingIconPress={() => onRemoveTagButtonPressed(index)}
										externalTrailingIcon={binIcon} />
								</Animated.View>
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
							style={styles.footerButton}
							white
							onPress={onBackButtonPressed} />

						<BaseButton
							label="Edit"
							style={styles.footerButton}
							onPress={
								onEditButtonPressed
							} />
					</View>

				</ScrollView>
			</KeyboardAvoidingView>
		</SafeAreaView >

	);
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: backgroundColors.primary,
		paddingHorizontal: 16,
	},
	keyboardAvoidingContainer: {
		flex: 1
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
	disabledInput: {
		backgroundColor: backgroundColors.doubleCellPrimary,
		borderRadius: 15,
		padding: 16,
		gap: 4,
	},
	disabledInputTitle: {
		fontWeight: '600'
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
	},
	footerButton: {
		flex: 1,
	}
})