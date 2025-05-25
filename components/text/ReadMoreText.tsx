import { colors, textColors } from "@/theme/colors";
import { fontSizes } from "@/utils/dimensions";
import React, { ReactNode, useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { TextProps } from "react-native-svg";
import { BaseText } from "./BaseText";

interface ReadMoreTextProps extends TextProps {
	children: ReactNode;
}

const ReadMoreText = ({ children }: ReadMoreTextProps) => {

	const [expanded, setExpanded] = useState(false);
	const [shouldShowReadMore, setShouldShowReadMore] = useState(true);

	const toggleExpanded = () => setExpanded(!expanded);

	return (
		<View style={styles.container}>
			<BaseText
				style={styles.text}
				numberOfLines={expanded ? undefined : 3}
				onTextLayout={(e) => {
					if (e.nativeEvent.lines.length > 3 && !expanded) {
						setShouldShowReadMore(true);
					}
				}}
			>
				{children}
			</BaseText>

			{shouldShowReadMore && !expanded && (
				<Pressable onPress={toggleExpanded}>
					<BaseText style={styles.link}>Read more</BaseText>
				</Pressable>
			)}

			{expanded && (
				<Pressable onPress={toggleExpanded}>
					<BaseText style={styles.link}>Show less</BaseText>
				</Pressable>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		marginBottom: 12,
	},
	text: {
		fontSize: fontSizes.body1,
		color: textColors.secondary
	},
	link: {
		color: colors.blue,
		marginTop: 4,
		fontWeight: "600",
	},
});

export default ReadMoreText;