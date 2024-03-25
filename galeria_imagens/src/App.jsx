import FotoAmpliada from './components/FotoAmpliada'
import SearchBar from './components/SearchBar'
import FotoList from './components/FotoList'

import { useState, useEffect } from 'react'

function App() {
  
  return (
    <div className='container'>
     <SearchBar/>
     <FotoList/>
     <FotoAmpliada/>
    </div>
  )
}

export default App
