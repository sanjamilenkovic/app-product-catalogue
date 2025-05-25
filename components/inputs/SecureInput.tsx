import Icons from "@/utils/icons";
import { useState } from "react";
import { Pressable } from "react-native";
import BaseInput from "./BaseInput";

interface SecureInputProps {
	label: string;
	placeholder: string;
	value?: string;
	icon: React.ReactNode;
	onChangeValue?: (text: string) => void;
}

function SecureInput ({
	label,
	placeholder,
	value,
	icon,
	onChangeValue }: SecureInputProps) {

	const [isSecure, setIsSecure] = useState(true)

	return (
		<BaseInput
			label={label}
			placeholder={placeholder}
			value={value}
			onChangeValue={onChangeValue}
			isSecure={isSecure}
			icon={icon}
			trailingIcon={
				<Pressable onPress={() => setIsSecure((prev) => !prev)}>
					<Icons.Eye />
				</Pressable>
			}
		/>
	)
}

export default SecureInput