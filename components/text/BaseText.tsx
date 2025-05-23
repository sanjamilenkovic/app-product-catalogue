import { textColors } from '@/theme/colors';
import { fontSizes } from '@/utils/dimensions';
import React, { ReactNode } from 'react';
import {
	StyleProp,
	StyleSheet,
	Text,
	TextProps,
	TextStyle,
} from 'react-native';

interface BaseTextProps extends TextProps {
	children: ReactNode;
	style?: StyleProp<TextStyle>;
}

export const BaseText: React.FC<BaseTextProps> = ({
	children,
	style
}) => {
	return (
		<Text
			numberOfLines={2}
			style={[
				styles.text,
				style,
			]}>
			{children}
		</Text>
	);
};

const styles = StyleSheet.create({
	text: {
		color: textColors.primary,
		fontSize: fontSizes.body2,
		fontFamily: 'Lexend',
	},
});
