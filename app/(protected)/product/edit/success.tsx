import BaseButton from "@/components/buttons/BaseButton";
import { BaseHeader } from "@/components/header/BaseHeader";
import { BaseText } from "@/components/text/BaseText";
import { colors } from "@/theme/colors";
import Icons from "@/utils/icons";
import { useRouter } from "expo-router";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SuccessfulEditingScreen () {
	const router = useRouter();

	const onBackToHome = () => {
		router.dismissTo('/');
	}

	return (
		<SafeAreaView style={styles.container}>
			<BaseHeader leadingIcon={<Icons.Close />} onBackPressed={onBackToHome} />

			<View style={styles.content}>
				<View style={styles.spacer} />

				<View style={styles.infoContainer}>
					<Icons.Check />
					<BaseText style={styles.title}>Product updated!</BaseText>
					<BaseText variant="body1" style={styles.description}>
						Successfully updated the product!
					</BaseText>
				</View>
			</View>

			<View style={styles.bottomButtonContainer}>
				<BaseButton
					label="Back to home"
					onPress={onBackToHome}
				/>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 16,
		backgroundColor: colors.darkBlue,
	},
	content: {
		flex: 1,
		justifyContent: 'flex-end',
	},
	spacer: {
		flex: 1,
	},
	infoContainer: {
		marginBottom: 100,
		padding: 16,
		borderRadius: 12,
	},
	title: {
		marginTop: 12,
		color: colors.white,
		fontSize: 64,
		fontWeight: '600',
	},
	description: {
		color: colors.white,
	},
	bottomButtonContainer: {
		paddingBottom: 24,
	},
});
