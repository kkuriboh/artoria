import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled.View`
	flex: 1;
	background-color: ${({ theme }) => theme.colors.black_0};
`

export const Content = styled.View`
	flex: 1;
	justify-content: space-evenly;
`

export const Title = styled.Text`
	color: ${({ theme }) => theme.colors.white};
	font-family: ${({ theme }) => theme.fonts.regular};
	font-size: ${RFValue(24)}px;
	font-weight: 300;
	text-align: center;
`

export const ButtonContainer = styled.View``

export const Button = styled.TouchableOpacity.attrs({
	activeOpacity: 0.6,
})`
	background-color: ${({ theme }) => theme.colors.black_2};
	padding: ${RFValue(18)}px;
	border-bottom-width: 1px;
	border-color: rgba(201, 203, 255, 0.25);
	margin: 3px;
`

export const ButtonText = styled.Text`
	text-align: center;
	color: ${({ theme }) => theme.colors.white};
	font-family: ${({ theme }) => theme.fonts.regular};
	font-size: ${RFValue(18)}px;
	letter-spacing: ${RFValue(1.08)}px;
`

export const Cp = styled.Text`
	color: ${({ theme }) => theme.colors.white};
	font-family: ${({ theme }) => theme.fonts.regular};
	opacity: 0.2;
	text-align: center;
`
