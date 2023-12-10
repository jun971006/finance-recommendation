import AppContainer from './src/navigation'
import { Provider } from 'react-redux'
import store from './src/modules/redux/Store'



export default function App() {
  return (
    <Provider store={store}>
      <AppContainer/>
    </Provider>
    
  );
}