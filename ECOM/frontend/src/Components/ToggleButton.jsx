import React from 'react'
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { useDispatch, useSelector } from 'react-redux'
import { toggleTheme } from '../Slice Redux/themeSlice'

const ToggleButton = () => {
const darkMode = useSelector((state)=> state.themeInfo.darkMode)
const dispatch = useDispatch()

  return (
    <>
      <button onClick={() => dispatch(toggleTheme())} className='text-2xl '>
        {darkMode ? <CiLight /> : <MdDarkMode />}
      </button>
    </>
  );
}

export default ToggleButton
