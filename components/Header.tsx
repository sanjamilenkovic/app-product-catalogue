import Icons from '@/utils/icons';
import React from 'react';
import { ColorValue, Pressable, StyleSheet, View } from 'react-native';

export type HeaderProps = {
	onBackPressed?: () => void;
	arrowColor?: ColorValue;
};

export const Header = (props: HeaderProps) => {
	return (
		<View style={styles.headerContainer}>
			<View style={styles.buttonContainer}>
				<Pressable onPress={props.onBackPressed}>
					<Icons.Arrow />
				</Pressable>
			</View>
		</View>
	);
};


const styles = StyleSheet.create({
	headerContainer: {
		paddingHorizontal: 8,
		flexDirection: 'row',
	},
	buttonContainer: {
		padding: 8,
	}
})