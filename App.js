import { useFonts, Kanit_400Regular, Kanit_700Bold } from '@expo-google-fonts/kanit';
import AppNavigation from './src/navigation';
import { Provider } from 'react-redux';
import store from './src/store';

const App = () => {

  const [fontsLoaded] = useFonts({
    Kanit_400Regular,
    Kanit_700Bold
  })

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
}

export default App;
