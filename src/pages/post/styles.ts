import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

import BtnIcon from '../../assets/send_btn.svg'

export const Container = styled.View`
	flex: 1;
	background-color: ${({ theme }) => theme.colors.black_0};
	align-items: center;
	padding: 18px;
`

export const ChatContainer = styled.FlatList`
	flex: 1;
	padding: 12px;
	width: 100%;
	border-width: 1px;
	border-color: ${({ theme }) => theme.colors.white};
	background-color: ${({ theme }) => theme.colors.black_1};
	border-radius: 12px;
`

export const InputContainer = styled.View`
	width: 100%;
	border-width: 1px;
	border-color: ${({ theme }) => theme.colors.white};
	background-color: ${({ theme }) => theme.colors.black_1};
	border-radius: 12px;
	align-items: center;
	margin-top: 12px;
	flex-direction: row;
	padding: 12px;
`

export const Input = styled.TextInput`
	flex: 1;
`

export const SendBtn = styled.TouchableOpacity`
	width: ${RFValue(20)}px;
	height: ${RFValue(20)}px;
	align-items: flex-end;
	justify-content: center;
`

export const Icon = styled(BtnIcon)``
