import { colors } from "@/theme/colors";
import { Pressable, StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native";

interface WideButtonProps {
	label: string;
	onPress: () => void;
	disabled?: boolean;
	style?: StyleProp<ViewStyle>;
}

function WideButton ({
	label,
	onPress,
	disabled,
	style,
}: WideButtonProps) {

	return (
		<View style={styles.container}>
			<Pressable
				onPress={onPress}
				disabled={disabled}
				style={[
					styles.button,
					style,
				]}>
				<Text style={styles.buttonText}>
					{label}
				</Text>
			</Pressable>
		</View>

	);
};

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 16,
	},
	button: {
		borderRadius: 15,
		paddingVertical: 4,
		height: 48,
		justifyContent: 'center',
		backgroundColor: colors.primary,
		alignItems: 'center',
	},
	buttonText: {
		fontWeight: '500'
	},
	buttonTextDark: {
		textAlign: 'center',
	},
});

export default WideButton