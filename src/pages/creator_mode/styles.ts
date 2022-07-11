import { ImageBackground } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled.View`
	flex: 1;
	background-color: ${({ theme }) => theme.colors.black_0};
`

export const Content = styled.View`
	flex: 1;
	padding: 18px;
`

export const Button = styled.TouchableOpacity.attrs({
	activeOpacity: 0.6,
})`
	padding: 5px;
	justify-content: center;
	align-items: center;
	background-color: ${({ theme }) => theme.colors.black_2};
	margin: 6px 0;
	border-radius: 4px;
`

export const ButtonText = styled.Text`
	color: ${({ theme }) => theme.colors.white};
	font-size: ${RFValue(12)}px;
	font-family: ${({ theme }) => theme.fonts.regular};
`

// there are some type errors with `styled.ImageBackground`
export const Image = styled(ImageBackground)`
	min-height: 40%;
	border-width: 1px;
	border-radius: 4px;
	border-color: ${({ theme }) => theme.colors.lavander};
	margin: 6px 0;
	padding: 6px;
`

export const ImageText = styled.Text`
	font-size: 12px;
	color: ${({ theme }) => theme.colors.white};
	font-family: ${({ theme }) => theme.fonts.regular};
`

export const TextBox = styled.TextInput`
	flex: 1;
	color: ${({ theme }) => theme.colors.white};
	font-family: ${({ theme }) => theme.fonts.regular};
	font-size: 8px;
	letter-spacing: 1px;
	margin: 6px 0;
	padding: 12px;
	border-width: 1px;
	border-radius: 4px;
	border-color: ${({ theme }) => theme.colors.lavander};
`

export const PostButton = styled(Button)`
	background-color: ${({ theme }) => theme.colors.blue};
	margin: 0;
	margin-top: 6px;
`

export const PostButtonText = styled(ButtonText)`
	color: ${({ theme }) => theme.colors.black_0};
`
