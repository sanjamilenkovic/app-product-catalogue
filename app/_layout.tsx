import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";

const queryClient = new QueryClient()

export default function RootLayout () {

  GoogleSignin.configure({
    webClientId: process.env.EXPO_PUBLIC_WEB_CLIENT_GOOGLE_SIGN_IN,
  });

  return (
    <QueryClientProvider client={queryClient}>
      <Stack screenOptions={{
        headerShown: false
      }} />
    </QueryClientProvider>
  );
}
