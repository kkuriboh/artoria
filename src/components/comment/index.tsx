import Pfp from '../pfp'

import { CommentText, Container } from './styles' //💅

type props = {
	children?: React.ReactNode
}

const comment: React.FC<props> = ({ children }) => {
	return (
		<Container>
			<Pfp size="sm" />
			<CommentText>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare
				molestie platea laoreet diam amet, mi, mi tortor. Ultrices
				tempus id morbi est, at et ac.
			</CommentText>
		</Container>
	)
}

export default comment
