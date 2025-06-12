import React , {useEffect} from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { useSelector } from 'react-redux';
import Navbar from './Components/Navbar'
import Home from './Pages/Home';
import Cart from './Components/Cart';
import NotFound from './Pages/404notFound';


const App = () => {

  const darkMode = useSelector((state) => state.themeInfo.darkMode);

  useEffect(()=> {
    if(darkMode){
      document.documentElement.classList.add('dark');
    }
    else{
      document.documentElement.classList.remove('dark')
    }

  }, [darkMode])


  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen text-gray-900 dark:text-white ">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
