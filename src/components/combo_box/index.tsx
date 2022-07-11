import { useRef, useState } from 'react'
import { Animated, TouchableOpacity } from 'react-native'

import { theme } from '../../utils/theme'
import { Container, Icon, Input, Label, Modal, Option } from './styles' //💅
import { RFValue } from 'react-native-responsive-fontsize'

type props = {
	label?: string
	items: Array<string>
	value: string
	set_value: (val: string) => void
}

const combo_box: React.FC<props> = ({ label, items, set_value, value }) => {
	const [opened, set_opened] = useState(false)
	const translation = useRef(new Animated.Value(0)).current

	const toggle_modal = () => {
		Animated.timing(translation, {
			toValue: opened
				? RFValue(10) + 12
				: items.length * (RFValue(10) + 12),
			useNativeDriver: true,
			duration: 300,
		}).start()
		set_opened(!opened)
	}

	return (
		<Container>
			{label ? <Label>{label}</Label> : null}
			<Input
				placeholder={items[0]}
				value={value}
				onFocus={toggle_modal}
				textAlign="left"
				textAlignVertical="center"
				placeholderTextColor={theme.colors.gray_0}
			/>
			<TouchableOpacity onPress={toggle_modal}>
				<Icon
					name="chevron-down"
					size={24}
					color={theme.colors.lavander}
				/>
			</TouchableOpacity>
			<Modal
				style={{
					display: !opened ? 'none' : 'flex',
					transform: [{ translateY: translation }],
				}}
			>
				{items.map((item, index) => {
					return (
						<TouchableOpacity
							key={index}
							onPress={() => {
								set_value(item)
								set_opened(false)
							}}
							style={{
								width: '100%',
							}}
						>
							<Option>{item}</Option>
						</TouchableOpacity>
					)
				})}
			</Modal>
		</Container>
	)
}

export default combo_box
