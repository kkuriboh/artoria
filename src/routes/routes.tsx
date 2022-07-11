import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons'

import { theme } from '../utils/theme'
import Home from '../pages/home'
import Settings from '../pages/settings'
import Profile from '../pages/profile'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import CreatorMode from '../pages/creator_mode'
import Header from '../components/header'
import { View } from 'react-native'
import Post from '../pages/post'

const Tab = createBottomTabNavigator()

const Stack = createNativeStackNavigator()

const routes: React.FC = () => {
	return (
		<Tab.Navigator
			initialRouteName="home"
			screenOptions={{
				tabBarActiveTintColor: theme.colors.mauve,
				tabBarInactiveTintColor: theme.colors.lavander,
				tabBarStyle: {
					backgroundColor: theme.colors.black_1,
					borderTopColor: theme.colors.black_2,
					borderTopWidth: 1,
				},
				headerShown: false,
				tabBarShowLabel: false,
			}}
		>
			<Tab.Screen
				name="settings"
				options={{
					tabBarIcon: ({ color, size }) => (
						<FontAwesome name="gear" color={color} size={size} />
					),
				}}
				component={Settings}
			/>
			<Tab.Screen
				name="home"
				options={{
					tabBarIcon: ({ color, size }) => (
						<MaterialCommunityIcons
							name="home"
							color={color}
							size={size}
						/>
					),
				}}
				component={HomeRoutes}
			/>
			<Tab.Screen
				name="profile"
				options={{
					tabBarIcon: ({ color, size }) => (
						<FontAwesome name="user" color={color} size={size} />
					),
				}}
				component={Profile}
			/>
		</Tab.Navigator>
	)
}

export default routes

const HomeRoutes: React.FC = () => {
	return (
		<View
			style={{
				flex: 1,
				backgroundColor: theme.colors.black_0,
			}}
		>
			<Header />
			<Stack.Navigator
				initialRouteName="home_page"
				screenOptions={{ headerShown: false }}
			>
				<Stack.Screen name="home_page" component={Home} />
				<Stack.Screen name="creator_mode" component={CreatorMode} />
				<Stack.Screen name="post" component={Post} />
			</Stack.Navigator>
		</View>
	)
}
