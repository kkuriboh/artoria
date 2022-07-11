import { Animated } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'
import { EvilIcons } from '@expo/vector-icons'

export const Container = styled.View`
	position: relative;
	z-index: 10;
	flex-direction: row;
	align-items: center;
	margin-bottom: 6px;
	border-radius: 4px;
	background-color: ${({ theme }) => theme.colors.black_2};
`

export const Label = styled.Text`
	padding: 6px 10px;
	font-size: ${RFValue(10)}px;
	color: ${({ theme }) => theme.colors.white};
	font-family: ${({ theme }) => theme.fonts.regular};
	border-color: ${({ theme }) => theme.colors.black_0};
	border-radius: 4px;
	border-right-width: 1px;
	background-color: ${({ theme }) => theme.colors.black_1};
`

export const Input = styled.TextInput`
	flex: 1;
	color: ${({ theme }) => theme.colors.white};
	font-size: ${RFValue(10)}px;
	font-family: ${({ theme }) => theme.fonts.regular};
	padding-left: 12px;
`

export const Icon = styled(EvilIcons)`
	margin-right: 6px;
`

export const Modal = styled(Animated.ScrollView)`
	width: 100%;
	position: absolute;
	background-color: ${({ theme }) => theme.colors.black_1};
	transform: translateY(${RFValue(10) + 12}px);
`

export const Option = styled.Text`
	color: ${({ theme }) => theme.colors.white};
	font-family: ${({ theme }) => theme.fonts.regular};
	font-size: ${RFValue(10)}px;
	padding: 6px;
	border-bottom-width: 1px;
	border-color: ${({ theme }) => theme.colors.gray_0};
	text-align: center;
`
