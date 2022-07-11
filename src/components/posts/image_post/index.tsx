import { Container, Content, Img, Description } from './styles'
import PostHeader from '../post_header'
import Toolbar from '../post_toolbar'
import { useWindowDimensions } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { useNavigation } from '@react-navigation/native'

const image_post: React.FC = () => {
	const navigation = useNavigation()
	const { width } = useWindowDimensions()

	return (
		<>
			<Container window_width={width}>
				<PostHeader />
				<Content onPress={() => navigation.navigate('post')}>
					<Img
						source={{
							uri: 'https://source.unsplash.com/random/800x600',
							height: RFPercentage(34),
							width: 800,
						}}
					/>

					<Description>
						Lorem ipsum dolor sit amet consectetur adipisicing
						elit...
					</Description>
				</Content>
			</Container>
			<Toolbar />
		</>
	)
}

export default image_post
