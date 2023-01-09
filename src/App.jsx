
import Header from './components/Header'
import AppBody from './components/AppBody'
import { StateProvider } from './store/index';

function App() {
  

  return (
    <div>
      <StateProvider>
        <Header></Header>
        <AppBody/>
      </StateProvider>
    </div>
  )
}

export default App
