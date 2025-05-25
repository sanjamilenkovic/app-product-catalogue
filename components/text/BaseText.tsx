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
	variant?: 'heading1' | 'heading2' | 'heading3' | 'body1' | 'body2'
}

export const BaseText: React.FC<BaseTextProps> = ({
	children,
	style,
	variant = 'body2',
	...rest
}) => {

	const variantStyles = {
		heading1: {
			fontSize: fontSizes.heading1,
			fontWeight: '600' as TextStyle['fontWeight'],
		},
		heading2: {
			fontSize: fontSizes.heading2,
			fontWeight: '600' as TextStyle['fontWeight'],
		},
		heading3: {
			fontSize: fontSizes.heading3,
			fontWeight: '500' as TextStyle['fontWeight'],
		},
		body1: {
			fontSize: fontSizes.body1,
			fontWeight: '500' as TextStyle['fontWeight'],
		},
		body2: {
			fontSize: fontSizes.body2,
			fontWeight: '400' as TextStyle['fontWeight'],
		},
	};

	return (
		<Text
			{...rest}
			style={[
				styles.text,
				variantStyles[variant],
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
		letterSpacing: 0
	},
});
