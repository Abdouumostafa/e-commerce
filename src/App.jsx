import Home from './pages/Home';
import Category from './pages/Category';
import ContinueWatching from './pages/ContinueWatching';
import Courses from './pages/Courses';
import CreateAccount from './pages/CreateAccount';
import MyAccount from './pages/MyAccount';
import Quiz from './pages/Quiz';
import SignIn from './pages/SignIn'

import { Route,Routes } from 'react-router';
import DetailCourses from './pages/DetailCourses';

function App() {
  return (
    <>
  <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/category' element={<Category />} />
      <Route path='/continue-watching' element={<ContinueWatching/>} />
      <Route path='/courses' element={<Courses />} />
      <Route path='/create-account' element={<CreateAccount/>} />
      <Route path='/detail-courses' element={<DetailCourses/>} />
      <Route path='/my-account' element={<MyAccount />} />
      <Route path='/quiz' element={<Quiz/>} />
      <Route path='/sign-in' element={<SignIn/>} />
  </Routes>
  </>
  )
}

export default App
