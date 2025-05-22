import WideButton from "@/components/buttons/WideButton";
import { Header } from "@/components/Header";
import LabeledInput from "@/components/inputs/LabeledInput";
import { colors } from "@/theme/colors";
import { fontSizes } from "@/utils/dimensions";
import Icons from "@/utils/icons";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LoginScreen () {

	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");

	const onLoginPressed = () => {

	}

	const onGoogleLoginPressed = () => {

	}

	const onBackPressed = () => {

	}

	return (
		<SafeAreaView style={styles.safeAreaContainer}>

			<View style={styles.container}>

				<Header onBackPressed={onBackPressed} />

				<View style={styles.titleContainer}>
					<Text style={styles.title}>Login</Text>
				</View>


				<View style={styles.inputsContainer}>

					<LabeledInput
						label="Email"
						value={email}
						onChangeValue={setEmail}
						placeholder="john@email.com"
						icon={<Icons.Email />} />

					<LabeledInput
						label="Password"
						placeholder="********"
						value={password}
						onChangeValue={setPassword}
						isSecure={true}
						icon={<Icons.Lock />} />

					<WideButton
						label="Login"
						onPress={onLoginPressed} />

					<WideButton
						label="Continue with Google"
						onPress={onGoogleLoginPressed}
						style={{ backgroundColor: colors.white }} />

				</View>

			</View>

		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	safeAreaContainer: {
		flex: 1,
		backgroundColor: colors.backgroundPrimary
	},
	container: {
		flex: 1,
		paddingVertical: 24,
		backgroundColor: colors.backgroundPrimary,
		gap: 16
	},
	titleContainer: {
		paddingHorizontal: 16,
		paddingTop: 24,
		paddingBottom: 16,
	},
	title: {
		fontSize: fontSizes.heading2,
		fontWeight: '600'
	},
	inputsContainer: {
		flex: 1,
		gap: 16,
	},

})