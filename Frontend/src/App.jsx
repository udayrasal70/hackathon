// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Register from './pages/Register/Register'
import Login from './pages/Login/Login'
import Sharereview from './pages/Sharereview/Sharereview'
import Editreview from './pages/Editreview/Editreview'
import Deletereview from './pages/Deletereview/Deletereview'
import Createreview from './pages/Createreview/Createreview'

import AllReviews from './pages/AllReviews/AllReviews'
import MyReviews from "./pages/MyReviews/MyReviews"
import AllMovies from './pages/AllMovies/AllMovies'
import EditProfile from "./pages/EditProfile/EditProfile"
import ChangePassword from './pages/ChangePassword/ChangePassword'
import NavBar from './components/NavBar/NavBar'
function App() {
  

  return (
    <>
      <Createreview></Createreview>
      {/* <Register></Register> */}
      <NavBar></NavBar>
      <AllReviews></AllReviews>
      {/* <MyReviews></MyReviews> */}
      {/* <AllMovies></AllMovies> */}
      {/* <EditProfile></EditProfile> */}



    </>
  )
}

export default App
