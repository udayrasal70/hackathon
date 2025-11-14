// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'


import ShareReview from './pages/ShareReview/ShareReview'
import EditReview from './pages/EditReview/EditReview'
import DeleteReview from './pages/DeleteReview/DeleteReview'
import CreateReview from './pages/CreateReview/CreateReview'

import AllReviews from './pages/AllReviews/AllReviews'
import MyReviews from "./pages/MyReviews/MyReviews"
import AllMovies from './pages/AllMovies/AllMovies'
import EditProfile from "./pages/EditProfile/EditProfile"
import ChangePassword from './pages/ChangePassword/ChangePassword'
import NavBar from './components/NavBar/NavBar'
import SignUp from './pages/SignUp/SignUp'

import Login from './pages/Login/Login'
import { Navigate,Routes,Route } from 'react-router-dom'
function App() {
  

  return (
    <>
      {/* <Createreview></Createreview> */}
      {/* <Register></Register> */}
      {/* <NavBar></NavBar> */}
      {/* <AllReviews></AllReviews> */}
      {/* <MyReviews></MyReviews> */}
      {/* <AllMovies></AllMovies> */}
      {/* <EditProfile></EditProfile> */}

      <Routes>
       
        <Route 
            path='/'
            element= {<SignUp/>}
        />
        <Route 
            path='/login'
            element= {<Login/>}
        />
        
        <Route 
            path='/shareReview'
            element= {<ShareReview/>}
        />
        <Route 
            path='/allReview'
            element= {<AllReviews/>}
        />
        <Route 
            path='/myReview'
            element= {<MyReviews/>}
        />
        <Route 
            path='/allMovies'
            element= {<AllMovies/>}
        />
        <Route 
            path='/editReview'
            element= {<EditReview/>}
        />
        <Route 
            path='/editProfile'
            element= {<EditProfile/>}
        />
        <Route 
            path='/deleteReview'
            element= {<DeleteReview/>}
        />
        <Route 
            path='/createReview'
            element= {<CreateReview/>}
        />

        <Route 
            path='/changePassword'
            element= {<ChangePassword/>}
        />

        

      </Routes>


    </>
  )
}

export default App
