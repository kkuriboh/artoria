import { StatusBar } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

type StatProp = {
	color: string
}

export const Container = styled.View`
	margin-top: ${StatusBar.currentHeight}px;
	padding: 22px;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	background-color: ${({ theme }) => theme.colors.black_1};
	border-bottom-left-radius: 12px;
	border-bottom-right-radius: 12px;
	border-bottom-width: 1px;
	border-left-width: 1px;
	border-right-width: 1px;
	border-color: ${({ theme }) => theme.colors.black_2};
`

export const StatsContainer = styled.View`
	margin-left: ${RFValue(40)}px;
`

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
