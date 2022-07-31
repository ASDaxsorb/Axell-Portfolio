import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { BiMoon, BiSun } from 'react-icons/bi'
import { motion } from 'framer-motion'

function ToggleButton() {
  const { theme, setTheme } = useContext(ThemeContext)

  return (
    <motion.button
      whileTap={{ rotateY: 180 }}
      transition={{ duration: 0.3 }}
      className={`border-2 p-2 rounded-lg ${
        theme === 'dark' ? 'border-green-300' : 'border-cyan-300'
      }`}
      onClick={() => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
      }}
    >
      {theme === 'light' ? (
        <BiMoon className="text-cyan-300 text-2xl" />
      ) : (
        <BiSun className="text-green-300 text-2xl" />
      )}
    </motion.button>
  )
}

export default ToggleButton
