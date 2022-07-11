import { useNavigation } from '@react-navigation/native'
import { useRef, useState } from 'react'
import { Animated } from 'react-native'
import Pfp from '../pfp'

import {
	Container,
	ButtonContainer,
	ButtonText,
	SwitchButton,
	SwitchDot,
	styles,
} from './styles' //💅

const header: React.FC = () => {
	const navigation = useNavigation()
	const [is_enabled, set_is_enabled] = useState(false)
	const translation = useRef(new Animated.Value(0)).current

	const toggle_switch = () => {
		Animated.timing(translation, {
			toValue: is_enabled ? 0 : 19,
			useNativeDriver: true,
			duration: 200,
		}).start()

		if (is_enabled) navigation.navigate('home_page')
		else navigation.navigate('creator_mode')

		set_is_enabled(!is_enabled)
	}

	return (
		<Container style={styles.boxShadow}>
			<Pfp size="md" />
			<ButtonContainer onPress={toggle_switch}>
				<SwitchButton is_active={is_enabled}>
					<SwitchDot
						is_active={is_enabled}
						style={{
							transform: [
								{
									translateX: translation,
								},
							],
						}}
					/>
				</SwitchButton>
				<ButtonText is_active={is_enabled}>
					{is_enabled ? 'creator mode' : 'user mode'}
				</ButtonText>
			</ButtonContainer>
		</Container>
	)
}

export default header
