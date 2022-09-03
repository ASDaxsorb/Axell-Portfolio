import ReactDOM from 'react-dom/client'
import App from './App'
import Background from './components/Background'
import { ThemeProvider } from './context/ThemeContext'
import './index.css'
import emailjs from '@emailjs/browser'

const container = document.getElementById('root')
const root = ReactDOM.createRoot(container)

root.render(
  <ThemeProvider>
    <Background>
      <App />
    </Background>
  </ThemeProvider>
)

emailjs.init(import.meta.env.VITE_PUBLIC_KEY)
