import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled.View`
	width: calc(100% - ${RFValue(36)}px);
	border: 1px solid ${({ theme }) => theme.colors.white};
	background-color: ${({ theme }) => theme.colors.black_1};
	border-radius: 12px;
`

export const Header = styled.View`
	width: 100%;
	border: 1px solid ${({ theme }) => theme.colors.white};
	background-color: ${({ theme }) => theme.colors.black_2};
	border-top-left-radius: 12px;
	border-top-right-radius: 12px;
`
