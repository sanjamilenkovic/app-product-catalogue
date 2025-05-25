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
import { getAuth, GoogleAuthProvider, signInWithCredential } from "@react-native-firebase/auth";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { useRouter } from "expo-router";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Toast from "react-native-toast-message";


export default function LoginScreen () {

	const setToken = useLocalStore(state => state.setToken)

	const router = useRouter()

	//username: emilys
	//password: emilyspass
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');

	const { mutateAsync, isPending } = useLogin()

	const onLoginSuccess = (token: string) => {
		setToken(token)
		router.navigate('/')
	}

	const onLoginPressed = async () => {

		mutateAsync({
			username: email,
			password: password
		},
			{
				onSuccess: (data) => {
					onLoginSuccess(data.accessToken)
				},
				onError: () => {
					Toast.show({
						type: 'error',
						text1: "Login failed"
					})
				}
			}
		)
	}

	const onGoogleLoginPressed = async () => {
		try {
			await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });

			const signInResult = await GoogleSignin.signIn();

			const idToken = signInResult?.data?.idToken;

			if (!idToken) {
				return
			}

			onLoginSuccess(idToken)

			const googleCredential = GoogleAuthProvider.credential(idToken);

			return signInWithCredential(getAuth(), googleCredential);
		} catch (error) {
			console.error('Google sign-in error:', error);
		}
	};

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

		</SafeAreaView >
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