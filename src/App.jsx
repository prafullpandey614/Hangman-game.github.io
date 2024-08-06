import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hangman from './components/Hangman'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Hangman/>
    </>
  )
}

export default App
