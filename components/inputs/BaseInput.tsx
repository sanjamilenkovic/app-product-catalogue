import { backgroundColors, colors, textColors } from "@/theme/colors";
import { fontSizes } from "@/utils/dimensions";
import { Pressable, StyleProp, StyleSheet, TextInput, View, ViewStyle } from "react-native";
import { BaseText } from "../text/BaseText";

interface LabeledInputProps {
	label?: string;
	placeholder: string;
	value?: string;
	onChangeValue?: (text: string) => void;
	icon?: React.ReactNode;
	isSecure?: boolean;
	trailingIcon?: React.ReactNode;
	externalTrailingIcon?: React.ReactNode;
	isMultiline?: boolean;
	isMandatory?: boolean;
	isEditable?: boolean;
	style?: StyleProp<ViewStyle>;
	onExternalTrailingIconPress?: () => void
	autoCapitalize?: "none" | "sentences" | "words" | "characters" | undefined

}

function BaseInput ({
	icon,
	label,
	placeholder,
	isSecure,
	value,
	onChangeValue,
	trailingIcon,
	externalTrailingIcon,
	isMultiline,
	isMandatory,
	isEditable = true,
	style,
	onExternalTrailingIconPress,
	autoCapitalize
}: LabeledInputProps) {

	return (
		<View>
			<View style={{ flexDirection: 'row' }}>
				{label && <BaseText style={styles.label}>{label}</BaseText>}
				{isMandatory && <BaseText style={[styles.label, { color: colors.error }]}>*</BaseText>}
			</View>

			<View style={[styles.inputContainer, style]}>
				<View style={[styles.inputSection, !isEditable ? { backgroundColor: backgroundColors.doubleCellPrimary } : {}]}>
					{icon}
					<TextInput
						secureTextEntry={isSecure}
						style={styles.input}
						autoCapitalize={autoCapitalize}
						editable={isEditable}
						value={value}
						multiline={isMultiline}
						onChangeText={onChangeValue}
						placeholderTextColor={textColors.secondary}
						placeholder={placeholder}
						underlineColorAndroid="transparent"
					/>
					{trailingIcon}
				</View>
				<Pressable onPress={onExternalTrailingIconPress}>
					{externalTrailingIcon}
				</Pressable>
			</View>

		</View>
	);
};

const styles = StyleSheet.create({
	inputContainer: {
		flexDirection: 'row',
		alignItems: 'center',
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
		minHeight: 56,
		backgroundColor: colors.white
	},
	input: {
		flex: 1,
		marginStart: 12,
		color: textColors.primary,
		fontSize: fontSizes.body1,
		fontFamily: 'Lexend',
		flexWrap: 'wrap'
	},
	disabledInput: {
		backgroundColor: backgroundColors.doubleCellPrimary
	}
});

export default BaseInput