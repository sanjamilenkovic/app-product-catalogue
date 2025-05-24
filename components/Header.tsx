import Icons from '@/utils/icons';
import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { BaseText } from './text/BaseText';

export type BaseHeaderProps = {
	headline?: string;
	trailingIcon?: React.ReactNode;
	onTrailingIconPressed?: () => void;
	onBackPressed?: () => void;
};

export const BaseHeader = ({ headline, onBackPressed, onTrailingIconPressed, trailingIcon }: BaseHeaderProps) => {
	return (
		<View style={styles.headerContainer}>

			<Pressable onPress={onBackPressed}>
				<Icons.Arrow />
			</Pressable>

			{headline && <BaseText variant='body1'>{headline}</BaseText>}

			<Pressable onPress={onTrailingIconPressed}>
				{trailingIcon}
			</Pressable>

		</View>
	);
};


const styles = StyleSheet.create({
	headerContainer: {
		paddingVertical: 16,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	buttonContainer: {
		padding: 8,
	}
})