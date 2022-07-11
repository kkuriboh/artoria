import { StatusBar } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

type StatProp = {
	color: string
}

export const Container = styled.View`
	margin-top: ${StatusBar.currentHeight}px;
	padding: 22px;
	/* align-items: center; */
	background-color: ${({ theme }) => theme.colors.black_1};
	border-bottom-left-radius: 12px;
	border-bottom-right-radius: 12px;
	border-bottom-width: 1px;
	border-left-width: 1px;
	border-right-width: 1px;
	border-color: ${({ theme }) => theme.colors.black_2};
`

export const Top = styled.View`
	flex-direction: row;
	align-items: center;
	justify-content: space-evenly;
	margin-bottom: 14px;
`

export const StatsContainer = styled.View``

export const StatRow = styled.View`
	flex-direction: row;
	justify-content: space-between;
`

export const StatName = styled.Text<StatProp>`
	color: ${({ color }) => color};
	font-family: ${({ theme }) => theme.fonts.regular};
	margin-right: ${RFValue(12)}px;
	font-size: 8px;
`

export const StatValue = styled.Text`
	color: ${({ theme }) => theme.colors.white};
	font-family: ${({ theme }) => theme.fonts.regular};
	font-size: 8px;
`

export const ButtonContainer = styled.View``

export const Button = styled.TouchableOpacity`
	background-color: ${({ theme }) => theme.colors.black_3};
	margin: 6px 0;
	padding: 2px 8px;
	border-radius: 4px;
	border-bottom-width: 1px;
	border-right-width: 1px;
	border-color: rgba(87, 82, 104, 0.25);
`

export const ButtonText = styled.Text<{
	color: string
}>`
	color: ${({ color }) => color};
	font-family: ${({ theme }) => theme.fonts.regular};
	text-align: center;
	font-size: 8px;
`

export const Bio = styled.Text`
	color: ${({ theme }) => theme.colors.white};
	font-family: ${({ theme }) => theme.fonts.regular};
	font-size: 8px;
	max-width: ${RFValue(230)}px;
	align-self: center;
`
