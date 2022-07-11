import { theme } from '../../utils/theme'
import Pfp from '../pfp'

import {
	Container,
	StatName,
	StatRow,
	StatsContainer,
	StatValue,
} from './styles' //💅

const st_profile_header: React.FC = () => {
	return (
		<Container>
			<Pfp size="xg" />
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
					<StatName color={theme.colors.green}>bookmarks</StatName>
					<StatValue>46</StatValue>
				</StatRow>
			</StatsContainer>
		</Container>
	)
}

export default st_profile_header
