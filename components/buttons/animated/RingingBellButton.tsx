import Icons from "@/utils/icons";
import { useCallback, useEffect } from "react";
import { Pressable } from "react-native";
import Animated, {
	Easing,
	useAnimatedStyle,
	useSharedValue,
	withRepeat,
	withSequence,
	withTiming,
} from "react-native-reanimated";
import Toast from "react-native-toast-message";

export function RingingBellButton () {
	const rotation = useSharedValue(0);

	const animatedStyle = useAnimatedStyle(() => ({
		transform: [{ rotate: `${rotation.value}deg` }],
	}));

	const triggerRing = useCallback(() => {
		rotation.value = withSequence(
			withTiming(-15, { duration: 100, easing: Easing.ease }),
			withRepeat(
				withSequence(
					withTiming(15, { duration: 100 }),
					withTiming(-15, { duration: 100 })
				),
				2,
				false
			),
			withTiming(0, { duration: 100 })
		);
	}, []);

	useEffect(() => {
		triggerRing();
	}, [triggerRing]);

	const ringBell = useCallback(() => {
		Toast.show({
			type: "success",
			text1: "Yet to be implemented",
		});
		triggerRing();
	}, [triggerRing]);

	return (
		<Pressable onPress={ringBell}>
			<Animated.View style={animatedStyle}>
				<Icons.Notification />
			</Animated.View>
		</Pressable>
	);
}
