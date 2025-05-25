import * as React from "react"
import Svg, { ClipPath, Defs, G, Path, SvgProps } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
	<Svg
		width={25}
		height={24}
		fill="none"
		{...props}
	>
		<G clipPath="url(#a)">
			<Path
				fill={props.fill ?? "#8796A4"}
				d="M17.218 12.834a7.052 7.052 0 1 0-8.721 0 11.753 11.753 0 0 0-7.31 9.614 1.183 1.183 0 0 0 2.35.259 9.402 9.402 0 0 1 18.688 0 1.175 1.175 0 0 0 1.175 1.046h.13a1.176 1.176 0 0 0 1.034-1.293 11.753 11.753 0 0 0-7.346-9.626ZM12.858 12a4.701 4.701 0 1 1 0-9.403 4.701 4.701 0 0 1 0 9.403Z"
			/>
		</G>
		<Defs>
			<ClipPath id="a">
				<Path fill="#fff" d="M.875 0h24v24h-24z" />
			</ClipPath>
		</Defs>
	</Svg>
)
export default SvgComponent
