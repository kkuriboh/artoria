import { useState } from 'react'
import { theme } from '../../utils/theme'

import ComboBox from '../../components/combo_box'

import {
	Container,
	Content,
	Image,
	ImageText,
	Button,
	ButtonText,
	TextBox,
	PostButton,
	PostButtonText,
} from './styles'

const CreatorMode: React.FC = () => {
	const [combobox_value, set_combobox_value] = useState('')

	return (
		<Container>
			<Content>
				<ComboBox
					label="art style"
					items={['pixel art', 'hand paint']}
					set_value={set_combobox_value}
					value={combobox_value}
				/>
				<Button>
					<ButtonText>upload file</ButtonText>
				</Button>
				<Image
					source={{
						uri: 'https://source.unsplash.com/random/800x600',
					}}
				>
					<ImageText>Preview</ImageText>
				</Image>
				<Button>
					<ButtonText>edit</ButtonText>
				</Button>
				<Button>
					<ButtonText>search filter</ButtonText>
				</Button>
				<TextBox
					textAlign="left"
					textAlignVertical="top"
					placeholder="description..."
					placeholderTextColor={theme.colors.gray_0}
				/>
				<PostButton>
					<PostButtonText>post</PostButtonText>
				</PostButton>
			</Content>
		</Container>
	)
}

export default CreatorMode
