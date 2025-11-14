import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Register from './pages/Register/Register'
import Login from './pages/Login/Login'
import Sharereview from './pages/Sharereview/Sharereview'
import Editreview from './pages/Editreview/Editreview'
import Deletereview from './pages/Deletereview/Deletereview'
import Createreview from './pages/Createreview/Createreview'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Createreview></Createreview>
    </>
  )
}

export default App
