import { login } from "@/api/auth/login";
import BaseButton from "@/components/buttons/BaseButton";
import { Header } from "@/components/Header";
import LabeledInput from "@/components/inputs/LabeledInput";
import { BaseText } from "@/components/text/BaseText";
import { colors } from "@/theme/colors";
import { fontSizes } from "@/utils/dimensions";
import Icons from "@/utils/icons";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LoginScreen () {

	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");

	const loginMutation = useMutation({
		mutationKey: ['login'],
		mutationFn: login
	});

	const onLoginPressed = async () => {

		console.log("Login pressed", email, password);

		await loginMutation.mutateAsync({
			email: email,
			password: password,
		}, {
			onSuccess: (data) => {
				console.log("Login successful", data);
			},
			onError: (error) => {
				console.log("Login failed", error);
			}
		})
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
					<BaseText style={styles.title}>Login</BaseText>
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

					<BaseButton
						label="Login"
						onPress={onLoginPressed} />

					<BaseButton
						label="Continue with Google"
						onPress={onGoogleLoginPressed}
						icon={<Icons.Google />}
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