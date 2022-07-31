import ReactDOM from 'react-dom/client'
import App from './App'
import Background from './components/Background'
import { ThemeProvider } from './context/ThemeContext'
import './index.css'

const container = document.getElementById('root')
const root = ReactDOM.createRoot(container)

root.render(
  <ThemeProvider>
    <Background>
      <App />
    </Background>
  </ThemeProvider>
)
