import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
	<Svg
		width={24}
		height={24}
		viewBox="0 0 24 24"
		fill="none"
		{...props}
	>
		<Path
			fill="#566A7C"
			d="m5.798 13.297 9.96 9.942a1.76 1.76 0 1 0 2.499-2.48l-8.71-8.8 8.71-8.71a1.76 1.76 0 0 0 0-2.481 1.76 1.76 0 0 0-1.25-.528 1.763 1.763 0 0 0-1.249.528l-9.96 9.942a1.761 1.761 0 0 0 0 2.587Z"
		/>
	</Svg>
)
export default SvgComponent
