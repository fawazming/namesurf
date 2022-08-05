// import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Explore from './Explore'
import Search from './components/Search'
import Categories from './components/Categories'
import Bookmarks from './components/Bookmarks'
import Navr from './components/Navr'

function App() {

  return (
    <div className="App p-2 max-h-screen">
      <Search/>
      <Categories/>
      <Bookmarks className=""/>
      <Navr/>
    </div>
  )
}

export default App
