import * as React from "react"
import Svg, { ClipPath, Defs, G, Path, SvgProps } from "react-native-svg"

const SvgComponent = (props: SvgProps) => (
	<Svg
		width={25}
		height={24}
		fill={'currentColor'}
	>
		<G clipPath="url(#a)">
			<Path
				fill={'currentColor'}
				d="M21.975 3.321a7.37 7.37 0 0 0-9.592-.717 7.37 7.37 0 0 0-9.591 11.143l8.757 8.757a1.177 1.177 0 0 0 1.669 0l8.757-8.757a7.369 7.369 0 0 0 0-10.426Zm-1.658 8.77-7.934 7.921L4.45 12.09a5.032 5.032 0 0 1 3.527-8.58 4.995 4.995 0 0 1 3.526 1.469 1.18 1.18 0 0 0 1.286.257c.143-.06.274-.147.383-.257a5.019 5.019 0 0 1 7.052 7.111h.094Z"
			/>
		</G>
		<Defs>
			<ClipPath id="a">
				<Path fill={'currentColor'} d="M.375 0h24v24h-24z" />
			</ClipPath>
		</Defs>
	</Svg>
)
export default SvgComponent
