import { Pressable } from "react-native"

interface IconButtonProps {
	icon: React.ReactNode
	onButtonPressed: () => void
}

export function IconButton ({ icon, onButtonPressed }: IconButtonProps) {
	return (
		<Pressable onPress={onButtonPressed}>
			{icon}
		</Pressable>
	)
}