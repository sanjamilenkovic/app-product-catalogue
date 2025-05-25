import { colors } from "@/theme/colors";
import Icons from "@/utils/icons";
import { StyleSheet, View } from "react-native";
import BaseButton from "../buttons/BaseButton";
import { BaseText } from "../text/BaseText";
import CardWrapper from "./CardWrapper";

interface CardInviteProps {
	onInviteButtonPressed: () => void;
}

export function CardInvite ({ onInviteButtonPressed }: CardInviteProps) {
	return (
		<CardWrapper style={styles.container}>
			<Icons.AddUser />

			<View style={styles.inviteTextContainer}>
				<BaseText variant="heading3" style={styles.inviteTitle}>Invite business partners</BaseText>

				<BaseText style={styles.inviteDescripton}>
					Know other contractors looking for skilled workers? Recommend our app and help them find the right talent while growing your network.
				</BaseText>
			</View>

			<BaseButton
				white
				onPress={onInviteButtonPressed}
				label="Invite business partner" />

		</CardWrapper>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#0E263ECC",
		marginHorizontal: 16,
		padding: 16,
	},
	inviteTextContainer: {
		paddingVertical: 16,
		gap: 4
	},
	inviteTitle: {
		color: colors.white
	},
	inviteDescripton: {
		color: colors.white,
		fontWeight: '400'
	}
})