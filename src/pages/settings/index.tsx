import ProfileHeader from '../../components/st_profile_header'

import {
	Container,
	Title,
	Button,
	ButtonText,
	ButtonContainer,
	Cp,
	Content,
} from './styles'

const Settings: React.FC = () => {
	return (
		<Container>
			<ProfileHeader />
			<Content>
				<Title>settings</Title>
				<ButtonContainer>
					<Button>
						<ButtonText>user</ButtonText>
					</Button>
					<Button>
						<ButtonText>interface</ButtonText>
					</Button>
					<Button>
						<ButtonText>privacy</ButtonText>
					</Button>
					<Button>
						<ButtonText>others</ButtonText>
					</Button>
				</ButtonContainer>
				<Cp>&copy;Artoria - Inc</Cp>
			</Content>
		</Container>
	)
}

export default Settings
