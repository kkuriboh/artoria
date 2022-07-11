import { RFValue } from 'react-native-responsive-fontsize'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import styled from 'styled-components/native'
import SVGLogo from '../../assets/logo.svg'

export const Container = styled.View`
	flex: 1;
	background-color: ${({ theme }) => theme.colors.black_0};
	align-items: center;
	justify-content: space-evenly;
`

export const Button = styled.TouchableOpacity<{
	window_width: number
}>`
	background-color: ${({ theme }) => theme.colors.white};
	padding: 8px 0;
	width: ${({ window_width }) => window_width - RFValue(48)}px;
	border-radius: 4px;
	margin: 8px 0;
	flex-direction: row;
	justify-content: center;
	align-items: center;
`

export const ButtonIcon = styled(MaterialCommunityIcons)`
	font-size: ${RFValue(16)}px;
`

export const ButtonText = styled.Text`
	font-family: ${({ theme }) => theme.fonts.regular};
	margin-left: 12px;
`

export const Logo = styled(SVGLogo)``
