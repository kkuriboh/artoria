import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled.View<{
	window_width: number
}>`
	width: ${({ window_width }) => window_width - RFValue(36)}px;
	border-width: 1px;
	border-color: ${({ theme }) => theme.colors.white};
	background-color: ${({ theme }) => theme.colors.black_1};
	border-radius: 12px;
	justify-content: center;
`

export const Content = styled.Pressable`
	padding: 12px;
`

export const Img = styled.Image`
	width: auto;
	border-width: 1px;
	border-color: ${({ theme }) => theme.colors.white};
`

export const Description = styled.Text`
	margin-top: 6px;
	color: ${({ theme }) => theme.colors.white};
	font-family: ${({ theme }) => theme.fonts.regular};
`
