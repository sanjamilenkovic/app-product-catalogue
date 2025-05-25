import { useLogin } from "@/api/auth/useLogin";
import BaseButton from "@/components/buttons/BaseButton";
import { BaseHeader } from "@/components/header/BaseHeader";
import BaseInput from "@/components/inputs/BaseInput";
import SecureInput from "@/components/inputs/SecureInput";
import { BaseText } from "@/components/text/BaseText";
import { useLocalStore } from "@/store/localStore";
import { backgroundColors } from "@/theme/colors";
import { fontSizes } from "@/utils/dimensions";
import Icons from "@/utils/icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LoginScreen () {

	const router = useRouter()
	const { setToken } = useLocalStore()

	//username: emilys
	//password: emilyspass
	const [email, setEmail] = useState<string>("emilys");
	const [password, setPassword] = useState<string>("emilyspass");

	const { mutateAsync, isPending } = useLogin()

	const onLoginPressed = async () => {

		mutateAsync({
			username: email,
			password: password
		},
			{
				onSuccess: (data) => {
					setToken(data.accessToken)
					router.navigate('/')
				},
				onError: (error) => {
					console.log("Login failed", error);
				}
			}
		)
	}

	const onGoogleLoginPressed = () => {

	}

	const onBackPressed = () => {

	}

	return (
		<SafeAreaView style={styles.safeAreaContainer}>

			<View style={styles.container}>

				<BaseHeader onBackPressed={onBackPressed} />

				<View style={styles.titleContainer}>
					<BaseText style={styles.title}>Login</BaseText>
				</View>


				<View style={styles.inputsContainer}>

					<BaseInput
						label="Email"
						value={email}
						onChangeValue={setEmail}
						placeholder="john@email.com"
						icon={<Icons.Email />} />

					<SecureInput
						label="Password"
						placeholder="********"
						value={password}
						onChangeValue={setPassword}
						icon={<Icons.Lock />} />

					<BaseButton
						label="Login"
						isLoading={isPending}
						onPress={onLoginPressed} />

					<BaseButton
						label="Continue with Google"
						white
						onPress={onGoogleLoginPressed}
						icon={<Icons.Google />}
					/>
				</View>

			</View>

		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	safeAreaContainer: {
		flex: 1,
		backgroundColor: backgroundColors.primary
	},
	container: {
		flex: 1,
		paddingVertical: 24,
		paddingHorizontal: 16,
		backgroundColor: backgroundColors.primary,
		gap: 16
	},
	titleContainer: {
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