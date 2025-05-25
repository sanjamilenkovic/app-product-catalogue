import { BaseText } from "@/components/text/BaseText";
import { backgroundColors, textColors } from "@/theme/colors";
import { StyleSheet, View } from "react-native";

interface SingleDetailInfoProps {
	title: string;
	value: string | number;
	enableBottomBorderRadius?: boolean;
}

export function SingleDetailInfo ({ title, value, enableBottomBorderRadius }: SingleDetailInfoProps) {
	return (
		<View style={[styles.detailInfoContainer, enableBottomBorderRadius ? { borderBottomStartRadius: 15, borderBottomEndRadius: 15 } : {}]}>

			<View style={styles.details}>
				<BaseText style={styles.title}>{title}</BaseText>
				<BaseText variant="body1" style={styles.value}>{value}</BaseText>
			</View>

		</View>
	)
}


const styles = StyleSheet.create({
	detailInfoContainer: {
		borderTopStartRadius: 15,
		borderTopEndRadius: 15,
		backgroundColor: backgroundColors.cellPrimary,
		borderBottomWidth: 0.5,
		borderBottomColor: backgroundColors.strokePrimary
	},
	details: {
		padding: 16,
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	title: {
		color: textColors.secondary
	},
	value: {
		fontWeight: '400',
	}
});
