import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled.View`
	flex: 1;
	background-color: ${({ theme }) => theme.colors.black_0};
`

export const Content = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;
`

export const Placeholder = styled.Text`
	color: ${({ theme }) => theme.colors.black_4};
	font-family: ${({ theme }) => theme.fonts.regular};
	font-size: ${RFValue(16)}px;
`
