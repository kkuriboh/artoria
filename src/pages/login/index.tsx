import { useWindowDimensions, View } from 'react-native'

import { Button, ButtonIcon, ButtonText, Container, Logo } from './styles'

const Login: React.FC = () => {
	const { width } = useWindowDimensions()
	return (
		<Container>
			<Logo />
			<View>
				<Button window_width={width}>
					<ButtonIcon name="google" />
					<ButtonText>login with google</ButtonText>
				</Button>
				<Button window_width={width}>
					<ButtonIcon name="apple" />
					<ButtonText>login with apple</ButtonText>
				</Button>
			</View>
		</Container>
	)
}

export default Login
