import { colors, textColors } from "@/theme/colors";
import { fontSizes } from "@/utils/dimensions";
import Icons from "@/utils/icons";
import { StyleSheet, TextInput, View } from "react-native";
import { BaseText } from "../text/BaseText";

interface LabeledInputProps {
	label: string;
	placeholder: string;
	value?: string;
	onChangeValue?: (text: string) => void;
	icon?: React.ReactNode;
	isSecure?: boolean;
}

function LabeledInput ({
	icon,
	label,
	placeholder,
	isSecure,
	value,
	onChangeValue
}: LabeledInputProps) {

	return (
		<View style={styles.inputContainer}>
			<BaseText style={styles.label}>{label}</BaseText>
			<View style={styles.inputSection}>
				{icon}
				<TextInput
					secureTextEntry={isSecure}
					style={styles.input}
					value={value}
					onChangeText={onChangeValue}
					placeholderTextColor={textColors.secondary}
					placeholder={placeholder}
					underlineColorAndroid="transparent"
				/>
				{isSecure && <Icons.Eye />}
			</View>
		</View>

	);
};

const styles = StyleSheet.create({
	inputContainer: {
		paddingHorizontal: 16,
	},
	label: {
		fontWeight: '500',
		color: textColors.primary,
		marginBottom: 8,
		fontSize: fontSizes.body1,
	},
	inputSection: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 15,
		paddingHorizontal: 16,
		height: 56,
		backgroundColor: colors.white
	},
	input: {
		flex: 1,
		marginStart: 12,
		color: textColors.primary,
		fontSize: fontSizes.body1,
		fontFamily: 'Lexend'
	},
});

export default LabeledInput