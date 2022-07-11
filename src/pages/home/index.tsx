import ImagePost from '../../components/posts/image_post'

import { Container, PostList } from './styles'

const Home: React.FC = () => {
	return (
		<Container>
			<PostList data={[1, 2, 3]} renderItem={() => <ImagePost />} />
		</Container>
	)
}

export default Home
