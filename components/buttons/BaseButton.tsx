import { colors } from "@/theme/colors";
import { fontSizes } from "@/utils/dimensions";
import { Pressable, StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import { BaseText } from "../text/BaseText";

interface BaseButtonProps {
	label: string;
	onPress: () => void;
	disabled?: boolean;
	style?: StyleProp<ViewStyle>;
	icon?: React.ReactNode;
}

function BaseButton ({
	label,
	onPress,
	disabled,
	style,
	icon,
}: BaseButtonProps) {

	return (
		<View style={styles.container}>
			<Pressable
				onPress={onPress}
				disabled={disabled}
				style={[
					styles.button,
					style,
				]}>
				{icon}
				<BaseText style={[styles.buttonText, icon ? { paddingLeft: 15 } : {}]}>
					{label}
				</BaseText>
			</Pressable>
		</View >

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
		flexDirection: 'row',
	},
	buttonText: {
		fontWeight: '500',
		fontSize: fontSizes.body2
	},
	buttonTextDark: {
		textAlign: 'center',
	},
});

export default BaseButton