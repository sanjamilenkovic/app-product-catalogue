import { BaseText } from "@/components/text/BaseText";
import { backgroundColors, textColors } from "@/theme/colors";
import { StyleSheet, View } from "react-native";

interface SingleCategoryInfoProps {
	icon: React.ReactNode
	title: string;
	description: string;
	rate: string;
	enableBottomBorderRadius?: boolean;
}

export function SingleCategoryInfo ({ icon, title, description, rate, enableBottomBorderRadius }: SingleCategoryInfoProps) {
	return (
		<View style={[styles.categoryContentContainer, enableBottomBorderRadius ? { borderBottomStartRadius: 15, borderBottomEndRadius: 15 } : {}]}>
			<View style={styles.leftContainer}>

				<View style={styles.icon}>
					{icon}
				</View>

				<View style={styles.workersContainer}>
					<BaseText style={styles.title}>{title}</BaseText>
					<BaseText variant="body1" style={styles.value}>{description}</BaseText>
				</View>
			</View>

			<View style={styles.ratesContainer}>
				<BaseText style={styles.title}>Hourly rate</BaseText>
				<BaseText variant="body1" style={styles.value}>{rate} €/h </BaseText>
			</View>
		</View>
	)
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 16
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
	categoryContentContainer: {
		backgroundColor: backgroundColors.cellPrimary,
		padding: 16,
		flexDirection: 'row',
		justifyContent: 'space-evenly'
	},
	leftContainer: {
		flexDirection: 'row',
		alignItems: 'center'
	},
	icon: {
		padding: 10,
		backgroundColor: backgroundColors.cellSecondary,
		borderRadius: 100
	},
	title: {
		color: textColors.secondary
	},
	value: {
		fontWeight: '400',
	},
	workersContainer: {
		paddingStart: 12,
		gap: 2
	},
	ratesContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'flex-end',
		gap: 2

	}
});
