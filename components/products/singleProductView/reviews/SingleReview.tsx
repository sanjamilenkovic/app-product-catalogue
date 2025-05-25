import { BaseText } from "@/components/text/BaseText";
import { backgroundColors, textColors } from "@/theme/colors";
import Icons from "@/utils/icons";
import { StyleSheet, View } from "react-native";

interface SingleReviewProps {
	reviewer: string;
	rating: number;
	comment: string
}

export default function SingleReview ({ comment, rating, reviewer }: SingleReviewProps) {
	return (
		<View style={styles.container}>
			<View style={styles.headlineContainer}>
				<BaseText variant="body1" style={styles.categoryLabel}>{reviewer}</BaseText>
			</View>

			<View style={styles.ratingContainer}>
				<Icons.Star />
				<View style={{ marginStart: 12 }}>
					<BaseText variant="heading2">{rating}</BaseText>
					<BaseText style={{ color: textColors.secondary }}>Rating</BaseText>
				</View>
			</View>

			<View style={styles.commentContainer}>
				<BaseText style={{ color: textColors.secondary }} >Comment</BaseText>
				<BaseText>{comment}</BaseText>
			</View>
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
	ratingContainer: {
		flexDirection: 'row',
		padding: 16,
		alignItems: 'center',
		backgroundColor: backgroundColors.cellPrimary,
		borderBottomWidth: 0.5,
		borderBottomColor: backgroundColors.strokePrimary
	},
	commentContainer: {
		padding: 16,
		gap: 2,
		backgroundColor: backgroundColors.cellPrimary,
		borderBottomEndRadius: 15,
		borderBottomStartRadius: 15
	}
});
