import { backgroundColors } from "@/theme/colors";
import { fontSizes } from "@/utils/dimensions";
import { Pressable, StyleProp, StyleSheet, ViewStyle } from "react-native";
import { BaseText } from "../text/BaseText";

interface IconButtonSmallProps {
	label: string;
	onPress: () => void;
	disabled?: boolean;
	style?: StyleProp<ViewStyle>;
	icon?: React.ReactNode;
}

function IconButtonSmall ({
	label,
	onPress,
	disabled,
	style,
	icon,
}: IconButtonSmallProps) {

	return (
		<Pressable
			onPress={onPress}
			disabled={disabled}
			style={[
				styles.button,
				style,
			]}>
			<BaseText style={[styles.buttonText]}>
				{label}
			</BaseText>
			{icon}
		</Pressable>
	);
};

const styles = StyleSheet.create({

	button: {
		borderRadius: 10,
		paddingVertical: 8,
		paddingHorizontal: 12,
		justifyContent: 'center',
		backgroundColor: backgroundColors.cellPrimary,
		alignItems: 'center',
		flexDirection: 'row',
	},
	buttonText: {
		fontWeight: '400',
		fontSize: fontSizes.body2,
		marginRight: 8,
	},
	buttonTextDark: {
		textAlign: 'center',
	},
});

export default IconButtonSmall