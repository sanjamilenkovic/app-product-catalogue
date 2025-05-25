import Icons from '@/utils/icons';
import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { BaseText } from '../text/BaseText';

export type BaseHeaderProps = {
	headline?: string;
	leadingIcon?: React.ReactNode;
	trailingIcon?: React.ReactNode;
	onTrailingIconPressed?: () => void;
	onBackPressed?: () => void;
};

export const BaseHeader = ({
	headline,
	leadingIcon = <Icons.Arrow />,
	onBackPressed,
	onTrailingIconPressed,
	trailingIcon,
}: BaseHeaderProps) => {
	return (
		<View style={styles.headerContainer}>
			<View style={styles.sideContainer}>
				<Pressable onPress={onBackPressed}>
					{leadingIcon}
				</Pressable>
			</View>

			<View style={styles.centerContainer}>
				{headline && <BaseText variant='body1'>{headline}</BaseText>}
			</View>

			<View style={styles.sideContainer}>
				{trailingIcon ? (
					<Pressable onPress={onTrailingIconPressed}>
						{trailingIcon}
					</Pressable>
				) : null}
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	headerContainer: {
		paddingVertical: 16,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		position: 'relative',
	},
	sideContainer: {
		width: 40,
		alignItems: 'center',
		justifyContent: 'center',
	},
	centerContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
});
