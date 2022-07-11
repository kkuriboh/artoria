import styled from 'styled-components/native'

export const Container = styled.View`
	background-color: ${({ theme }) => theme.colors.black_2};
	border: 1px solid ${({ theme }) => theme.colors.white};
	border-top-left-radius: 12px;
	border-top-right-radius: 12px;
	width: 100%;
	padding: 6px 12px;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`

export const UserContainer = styled.View`
	flex-direction: row;
	align-items: center;
`

export const UsernameButton = styled.TouchableOpacity`
	margin-left: 12px;
`
export const UsernameText = styled.Text`
	color: ${({ theme }) => theme.colors.white};
	font-family: ${({ theme }) => theme.fonts.regular};
	letter-spacing: 4px;
	text-decoration: underline;
	text-decoration-color: ${({ theme }) => theme.colors.white};
`

export const FollowButton = styled.Pressable``

export const FollowButtonTxt = styled.Text`
	letter-spacing: 4px;
	color: ${({ theme }) => theme.colors.peach};
	font-family: ${({ theme }) => theme.fonts.regular};
`
