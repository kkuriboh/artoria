import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

type icon_props = {
	color: string
}

export const Container = styled.View<{
	window_width: number
}>`
	flex-direction: row;
	justify-content: space-between;
	width: ${({ window_width }) => window_width - RFValue(36)}px;
	border: 1px solid ${({ theme }) => theme.colors.white};
	background-color: ${({ theme }) => theme.colors.black_1};
	border-radius: 8px;
	margin-top: 6px;
	margin-bottom: ${RFPercentage(2)}px;
	padding: 6px 12px;
`

export const PositiveActionsContainer = styled.View`
	flex-direction: row;
`

export const PositiveActionWrapper = styled.View`
	flex-direction: row;
	margin-right: 20px;
	align-items: center;
`
export const PositiveActionText = styled.Text`
	color: ${({ theme }) => theme.colors.white};
	font-family: ${({ theme }) => theme.fonts.regular};
	font-size: ${RFValue(8)}px;
	margin-left: 8px;
`

export const Icon = styled(MaterialCommunityIcons)<icon_props>`
	color: ${({ color }) => color};
	font-size: 18px;
`
