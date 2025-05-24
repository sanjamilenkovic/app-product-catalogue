import { colors } from "@/theme/colors";
import { ActivityIndicator, Pressable, StyleProp, StyleSheet, ViewStyle } from "react-native";
import { BaseText } from "../text/BaseText";

interface BaseButtonProps {
	label: string;
	onPress: () => void;
	disabled?: boolean;
	style?: StyleProp<ViewStyle>;
	icon?: React.ReactNode;
	isLoading?: boolean;
	white?: boolean;
}

function BaseButton ({
	label,
	onPress,
	disabled,
	style,
	icon,
	isLoading,
	white
}: BaseButtonProps) {
	return (
		<Pressable
			onPress={onPress}
			disabled={disabled}
			style={[
				styles.button,
				style,
				white ? { backgroundColor: colors.white } : { backgroundColor: colors.primary }
			]}>
			{icon}
			{
				isLoading ?
					<ActivityIndicator /> :
					<BaseText style={[styles.buttonText, icon ? { paddingLeft: 15 } : {}]}>
						{label}
					</BaseText>
			}
		</Pressable>
	);
};

const styles = StyleSheet.create({
	button: {
		borderRadius: 15,
		paddingVertical: 4,
		height: 48,
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row',
	},
	buttonText: {
		fontWeight: '500',
	},
});

export default BaseButton