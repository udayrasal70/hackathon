// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

import AllReviews from './pages/AllReviews/AllReviews'
import MyReviews from "./pages/MyReviews/MyReviews"
import AllMovies from './pages/AllMovies/AllMovies'
import EditProfile from "./pages/EditProfile/EditProfile"
import ChangePassword from './pages/ChangePassword/ChangePassword'
import NavBar from './components/NavBar/NavBar'
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      {/* <Register></Register> */}
      <NavBar></NavBar>
      <AllReviews></AllReviews>
      {/* <MyReviews></MyReviews> */}
      {/* <AllMovies></AllMovies> */}
      {/* <EditProfile></EditProfile> */}
      {/* <ChangePassword></ChangePassword> */}


    </>
  )
}

export default App
