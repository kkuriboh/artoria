import {
	Container,
	FollowButton,
	UsernameText,
	UsernameButton,
	UserContainer,
	FollowButtonTxt,
} from './styles'
import Pfp from '../../pfp'

const post_header: React.FC = () => {
	return (
		<Container>
			<UserContainer>
				<Pfp size="sm" />
				<UsernameButton>
					<UsernameText>@placeholder</UsernameText>
				</UsernameButton>
			</UserContainer>
			<FollowButton>
				<FollowButtonTxt>follow</FollowButtonTxt>
			</FollowButton>
		</Container>
	)
}

export default post_header
