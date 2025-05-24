import { fontSizes } from "@/utils/dimensions";
import { StyleSheet, View } from "react-native";
import { BaseText } from "../../text/BaseText";

interface CardSingleInfoProps {
	label: string;
	value: string | number;
}

function CardSingleInfo ({ label, value }: CardSingleInfoProps) {
	return (
		<View style={styles.singleCardInfoContainer}>
			<BaseText style={styles.singleCardInfoLabel}>{label}</BaseText>
			<BaseText style={styles.singleCardInfoValue}>{value}</BaseText>
		</View>
	);
}

const styles = StyleSheet.create({
	singleCardInfoContainer: {
		flexDirection: "row",
		justifyContent: 'space-between',
		marginBottom: 12
	},
	singleCardInfoLabel: {
		fontWeight: '400',
		fontSize: fontSizes.body2
	},
	singleCardInfoValue: {
		fontWeight: '600',
	}
})

export default CardSingleInfo