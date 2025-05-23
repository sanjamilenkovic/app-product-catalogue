import { colors } from "@/theme/colors";
import Icons from "@/utils/icons";
import { Redirect, Tabs } from "expo-router";

export default function HomeTabsLayout () {

	const isLoggedIn = true;

	if (!isLoggedIn) {
		return <Redirect href={"/login"} />
	}

	return (
		<Tabs
			screenOptions={{
				headerShown: false,
				sceneStyle: {
					backgroundColor: colors.backgroundPrimary
				},
				tabBarActiveTintColor: colors.primary,
				tabBarStyle: {
					backgroundColor: colors.background
				}
			}}>
			<Tabs.Screen
				name="index"
				options={{
					title: "Overview",
					tabBarIcon: () => <Icons.Home width={24} height={24} />,
				}
				} />

			<Tabs.Screen
				name="favourites"
				options={{
					title: "Favourites",
					tabBarIcon: () => <Icons.Heart width={24} height={24} />,
				}} />

			<Tabs.Screen
				name="litings"
				options={{
					title: "Litings",
					tabBarIcon: () => <Icons.Briefcase width={24} height={24} />,
				}} />

			<Tabs.Screen
				name="profile"
				options={{
					title: "Profile",
					tabBarIcon: () => <Icons.Profile width={24} height={24} />,
				}} />

		</Tabs>
	);
}