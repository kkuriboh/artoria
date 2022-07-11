import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled.View`
	flex-direction: row;
	align-items: flex-end;
	justify-content: flex-start;
	margin: 8px 0;
`

export const CommentText = styled.Text`
	padding-bottom: 6px;
	font-size: ${RFValue(6)}px;
	color: ${({ theme }) => theme.colors.white};
	font-family: ${({ theme }) => theme.fonts.regular};
	border-color: ${({ theme }) => theme.colors.white};
	border-bottom-width: 1px;
`
