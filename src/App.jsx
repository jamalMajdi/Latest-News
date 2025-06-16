import React, { useState } from 'react'
import Navbar from './components/Navbar'
import './App.css'
import NewsContent from './components/NewsContent'

const App = () => {
  const [categories , setCategories] = useState("business")

  const [language, setLanguage] = useState('ar')
  return (
    <div className='main-container' dir={language =='en' ? 'ltr':'rtl'}>
      <Navbar categories={categories} setCategories={setCategories} language={language} setLanguage={setLanguage}/>
      <NewsContent categories={categories} language={language}/>
    </div>
  )
}

export default App

