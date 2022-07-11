import React from 'react'

import { useEffect } from 'react'
import { Montserrat_400Regular } from '@expo-google-fonts/montserrat'
import { StatusBar } from 'expo-status-bar'
import { ThemeProvider } from 'styled-components/native'
import * as SplashScreen from 'expo-splash-screen'
import * as Font from 'expo-font'

import Routes from './src/routes'
import { theme } from './src/utils/theme'

import CreatorMode from './src/pages/creator_mode'

export default function App() {
	const prepare = async () => {
		try {
			await Font.loadAsync('Montserrat_400Regular', Montserrat_400Regular)
			await SplashScreen.preventAutoHideAsync()
		} catch (e) {
			console.warn(e)
		} finally {
			await SplashScreen.hideAsync()
		}
	}

	useEffect(() => {
		prepare()
	}, [])

	return (
		<ThemeProvider theme={theme}>
			<StatusBar animated style="light" />
			<Routes />
			{/* <CreatorMode /> */}
		</ThemeProvider>
	)
}
