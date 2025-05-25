import { useLocalStore } from "@/store/localStore";
import { backgroundColors, colors } from "@/theme/colors";
import Icons from "@/utils/icons";
import { Redirect, Tabs } from "expo-router";

const tabScreens = [
	{
		name: "index",
		title: "Overview",
		Icon: Icons.House,
	},
	{
		name: "favourites",
		title: "Favourites",
		Icon: Icons.Heart,
	},
	{
		name: "litings",
		title: "Litings",
		Icon: Icons.Briefcase,
	},
	{
		name: "profile",
		title: "Profile",
		Icon: Icons.Profile,
	},
];

export default function HomeTabsLayout () {
	const token = useLocalStore(state => state.token);

	if (!token) {
		return <Redirect href="/login" />;
	}

	return (
		<Tabs
			screenOptions={{
				headerShown: false,
				sceneStyle: {
					backgroundColor: backgroundColors.primary,
				},
				tabBarActiveTintColor: colors.primary,
				tabBarStyle: {
					backgroundColor: colors.background,
				},
			}}
		>
			{tabScreens.map(({ name, title, Icon }) => (
				<Tabs.Screen
					key={name}
					name={name}
					options={{
						title,
						tabBarIcon: ({ color }) => <Icon fill={color} />,
					}}
				/>
			))}
		</Tabs>
	);
}
