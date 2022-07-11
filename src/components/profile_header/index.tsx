import { theme } from '../../utils/theme'
import Pfp from '../pfp'

import {
	Bio,
	Button,
	ButtonContainer,
	ButtonText,
	Container,
	StatName,
	StatRow,
	StatsContainer,
	StatValue,
	Top,
} from './styles' //💅

const profile_header: React.FC = () => {
	return (
		<Container>
			<Top>
				<StatsContainer>
					<StatRow>
						<StatName color={theme.colors.red}>followers</StatName>
						<StatValue>346</StatValue>
					</StatRow>
					<StatRow>
						<StatName color={theme.colors.blue}>following</StatName>
						<StatValue>517</StatValue>
					</StatRow>
					<StatRow>
						<StatName color={theme.colors.yellow}>likes</StatName>
						<StatValue>6.1K</StatValue>
					</StatRow>
					<StatRow>
						<StatName color={theme.colors.green}>
							bookmarks
						</StatName>
						<StatValue>46</StatValue>
					</StatRow>
				</StatsContainer>
				<Pfp size="xg" />
				<ButtonContainer>
					<Button>
						<ButtonText color={theme.colors.mauve}>
							follow
						</ButtonText>
					</Button>
					<Button>
						<ButtonText color={theme.colors.teal}>chat</ButtonText>
					</Button>
				</ButtonContainer>
			</Top>
			<Bio>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
				tristique purus lacus ac risus felis, quis ac eu. Pellentesque
				risus lectus lectus massa elementum elit.
			</Bio>
		</Container>
	)
}

export default profile_header
