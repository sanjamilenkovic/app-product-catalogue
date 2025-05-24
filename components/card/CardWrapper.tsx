import { backgroundColors } from '@/theme/colors';
import React, { ReactNode } from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';

interface CardWrapperProps {
	children: ReactNode;
	style?: StyleProp<ViewStyle>;
}

const CardWrapper = ({ children, style }: CardWrapperProps) => {
	return (
		<View style={[styles.card, style]}>
			{children}
		</View>
	);
};

const styles = StyleSheet.create({
	card: {
		backgroundColor: backgroundColors.cellPrimary,
		borderRadius: 15,
		//padding: 12, // Example padding
		//marginVertical: 8, // Example vertical margin
	},
});

export default CardWrapper;
