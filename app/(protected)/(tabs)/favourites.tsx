import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function FavouritesScreen () {

	const { top } = useSafeAreaInsets()

	return (
		<View
			style={{
				flex: 1,
				marginTop: top
			}}
		>

		</View>
	);
}
