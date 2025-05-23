import { colors, textColors } from "@/theme/colors";
import { fontSizes } from "@/utils/dimensions";
import { StyleSheet, TextInput, View } from "react-native";
import { BaseText } from "../text/BaseText";

interface LabeledInputProps {
	label?: string;
	placeholder: string;
	value?: string;
	onChangeValue?: (text: string) => void;
	icon?: React.ReactNode;
	isSecure?: boolean;
	trailingIcon?: React.ReactNode;
	externalTrailingIcon?: React.ReactNode
}

function BaseInput ({
	icon,
	label,
	placeholder,
	isSecure,
	value,
	onChangeValue,
	trailingIcon,
	externalTrailingIcon
}: LabeledInputProps) {

	return (
		<View style={styles.labeledInputContainer}>
			<BaseText style={styles.label}>{label}</BaseText>
			<View style={styles.inputContainer}>
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
					{trailingIcon}
				</View>
				{externalTrailingIcon}
			</View>

		</View>

	);
};

const styles = StyleSheet.create({
	labeledInputContainer: {
		paddingHorizontal: 16,
	},
	inputContainer: {
		flexDirection: 'row',
		alignItems: 'center'
	},
	label: {
		fontWeight: '500',
		color: textColors.primary,
		marginBottom: 8,
		fontSize: fontSizes.body1,
	},
	inputSection: {
		flex: 1,
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

export default BaseInput