import { Animated, StatusBar, StyleSheet } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'
import { theme } from '../../utils/theme'

type ButtonProps = {
	is_active: boolean
}

export const Container = styled.View`
	margin-top: ${StatusBar.currentHeight}px;
	width: 100%;
	background-color: ${({ theme }) => theme.colors.black_1};
	padding: 12px 24px;
	border-bottom-right-radius: 12px;
	border-bottom-left-radius: 12px;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`

export const styles = StyleSheet.create({
	boxShadow: {
		shadowColor: theme.colors.black_2,
		shadowOffset: {
			width: 0,
			height: 2,
		},
	},
})

export const ButtonContainer = styled.Pressable`
	align-items: center;
	justify-content: center;
`

export const SwitchButton = styled.View<ButtonProps>`
	position: relative;
	border: 1px solid
		${({ theme, is_active }) =>
			is_active ? theme.colors.green : theme.colors.lavander};
	border-radius: 12px;
	width: 40px;
	height: 22px;
`
export const SwitchDot = styled(Animated.View)<ButtonProps>`
	background-color: ${({ theme, is_active }) =>
		is_active ? theme.colors.green : theme.colors.lavander};
	width: 8px;
	height: 8px;
	top: 6px;
	left: 6px;
	transition: all 0.3s;
	border-radius: 4px;
`

export const ButtonText = styled.Text<ButtonProps>`
	color: ${({ theme, is_active }) =>
		is_active ? theme.colors.green : theme.colors.lavander};
	font-size: ${RFValue(6)}px;
	margin-top: 3px;
`
