import CardWrapper from "@/components/card/CardWrapper";
import { BaseText } from "@/components/text/BaseText";
import { backgroundColors } from "@/theme/colors";
import { StyleSheet } from "react-native";

interface CardInfoWithIconProps {
	title: string;
	description: string;
	icon: React.ReactNode
}

function CardInfoChipWithIcon ({ description, icon, title }: CardInfoWithIconProps) {
	return (
		<CardWrapper style={styles.singleCardInfoContainer}>
			{icon}
			<BaseText variant="body1" style={styles.singleCardInfoTitle}>{title}</BaseText>
			<BaseText>{description}</BaseText>
		</CardWrapper>
	);
}

const styles = StyleSheet.create({
	singleCardInfoContainer: {
		backgroundColor: backgroundColors.cellPrimary,
		width: 172,
		borderRadius: 15,
		padding: 16,
		gap: 8
	},
	singleCardInfoTitle: {
		fontWeight: '600',
	}
})

export default CardInfoChipWithIcon