import { TouchableOpacity, useWindowDimensions } from 'react-native'
import {
	Container,
	Icon,
	PositiveActionsContainer,
	PositiveActionWrapper,
	PositiveActionText,
} from './styles'

const post_toolbar: React.FC = () => {
	const { width } = useWindowDimensions()
	return (
		<Container window_width={width}>
			<PositiveActionsContainer>
				<PositiveActionWrapper>
					<TouchableOpacity>
						<Icon name="heart-outline" color="#F5C2E7" />
					</TouchableOpacity>
					<PositiveActionText>12K</PositiveActionText>
				</PositiveActionWrapper>
				<PositiveActionWrapper>
					<TouchableOpacity>
						<Icon name="bookmark-outline" color="#ABE9B3" />
					</TouchableOpacity>
					<PositiveActionText>508</PositiveActionText>
				</PositiveActionWrapper>
				<PositiveActionWrapper>
					<TouchableOpacity>
						<Icon name="chat-outline" color="#96CDFB" />
					</TouchableOpacity>
					<PositiveActionText>82</PositiveActionText>
				</PositiveActionWrapper>
			</PositiveActionsContainer>
			<TouchableOpacity>
				<Icon name="exclamation-thick" color="#F28FAD" />
			</TouchableOpacity>
		</Container>
	)
}

export default post_toolbar
