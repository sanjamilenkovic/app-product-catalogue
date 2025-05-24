import { colors } from "@/theme/colors";
import React, { ReactNode, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
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
					<Text style={styles.link}>Read more</Text>
				</Pressable>
			)}
			{expanded && (
				<Pressable onPress={toggleExpanded}>
					<Text style={styles.link}>Show less</Text>
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
		fontSize: 16,
		lineHeight: 22,
		color: "#333",
	},
	link: {
		color: colors.blue,
		marginTop: 4,
		fontWeight: "600",
	},
});

export default ReadMoreText;