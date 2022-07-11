import styled from 'styled-components/native'

export const Container = styled.View`
	flex: 1;
	background-color: ${({ theme }) => theme.colors.black_0};
	color: ${({ theme }) => theme.colors.flamingo};
	align-items: center;
`

export const PostList = styled.FlatList`
	margin-top: 18px;
`
