import { Image } from 'react-native'
import { Container, Background } from './styles'

type props = {
	size: 'sm' | 'md' | 'xg'
}

const pfp: React.FC<props> = ({ size }) => {
	const [width, height] =
		size === 'sm' ? [24, 24] : size === 'md' ? [48, 48] : [64, 64]
	const container = size === 'md' ? 6 : size === 'sm' ? 5 : 7.5
	return (
		<Container
			style={{
				width: width + container,
				height: height + 2,
			}}
		>
			<Background width={width + 2} height={height + 2} />
			<Image
				style={{
					borderRadius: width / 2,
				}}
				source={{
					uri: 'https://github.com/kkuriboh.png',
					height,
					width,
				}}
			/>
		</Container>
	)
}

export default pfp
