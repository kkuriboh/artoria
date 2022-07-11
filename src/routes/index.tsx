import { NavigationContainer } from '@react-navigation/native'
import Routes from './routes'

const router = () => {
	return (
		<NavigationContainer>
			<Routes />
		</NavigationContainer>
	)
}

export default router
