import ProfileHeader from '../../components/profile_header'

import { Container, Content, Placeholder } from './styles'

const Profile: React.FC = () => {
	return (
		<Container>
			<ProfileHeader />
			<Content>
				<Placeholder>ops! nothing to see here.</Placeholder>
			</Content>
		</Container>
	)
}

export default Profile
