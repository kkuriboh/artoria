import ImagePost from '../../components/posts/image_post'
import Comment from '../../components/comment'

import {
	Container,
	ChatContainer,
	Input,
	InputContainer,
	SendBtn,
	Icon,
} from './styles'
import { theme } from '../../utils/theme'

const Post: React.FC = () => {
	return (
		<Container>
			<ImagePost />
			<ChatContainer data={[1, 2, 3]} renderItem={() => <Comment />} />
			<InputContainer>
				<Input
					textAlign="left"
					placeholder="write a comment :)"
					placeholderTextColor={theme.colors.gray_0}
				/>
				<SendBtn>
					<Icon width={16} height={16} />
				</SendBtn>
			</InputContainer>
		</Container>
	)
}

export default Post
