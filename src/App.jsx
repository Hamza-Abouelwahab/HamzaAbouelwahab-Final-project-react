
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import ContentAbout from './pages/about'
import Header from './layout/header'
import Footer from './layout/footer'
import Shop from './pages/shop'
import Blog from './pages/blog'
import ContactSection from './pages/contact'
import Login from './login/login'


function App() {

  return (
    <>
    

      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<ContentAbout/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/contact' element={<ContactSection/>}/>
        <Route path='/login' element={<Login/>} />
      </Routes>
      
      <Footer/>
    
    
    </>
  )
}
export default App
