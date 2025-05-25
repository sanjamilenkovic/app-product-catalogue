import { BaseText } from "@/components/text/BaseText";
import { backgroundColors, textColors } from "@/theme/colors";
import Icons from "@/utils/icons";
import { StyleSheet, View } from "react-native";
import { SingleCategoryInfo } from "./categoryCard/SingleCategoryInfo";

export function CategoryCard () {
	return (
		<View style={styles.container}>

			<View style={styles.headlineContainer}>
				<BaseText variant="body1" style={styles.categoryLabel}>Category</BaseText>
				<BaseText variant="body1">Category name</BaseText>
			</View>

			<SingleCategoryInfo
				icon={<Icons.Worker />}
				title="Workers needed"
				description="2 professionals"
				rate="36,00"
			/>

			<SingleCategoryInfo
				icon={<Icons.Briefcase height={20} width={20} fill={textColors.primary} />}
				title="Workers needed"
				description="1 helper"
				rate="20,00"
				enableBottomBorderRadius
			/>

		</View>
	)
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 16,
	},
	headlineContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingVertical: 12,
		paddingHorizontal: 16,
		borderTopStartRadius: 15,
		borderTopEndRadius: 15,
		backgroundColor: backgroundColors.cellSecondary
	},
	categoryLabel: {
		fontWeight: '600'
	},
});
