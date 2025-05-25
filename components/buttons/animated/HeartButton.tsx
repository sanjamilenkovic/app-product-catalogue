import Icons from "@/utils/icons";
import { useEffect } from "react";
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";

export function HeartButton ({ isFavorite }: { isFavorite: boolean }) {
	const scale = useSharedValue(1);

	useEffect(() => {
		scale.value = 1.3;
		scale.value = withTiming(1, { duration: 200 });
	}, [isFavorite]);

	const animatedStyle = useAnimatedStyle(() => ({
		transform: [{ scale: scale.value }],
	}));

	return (
		<Animated.View style={animatedStyle}>
			{isFavorite ? <Icons.HeartFilled /> : <Icons.Heart />}
		</Animated.View>
	);
}