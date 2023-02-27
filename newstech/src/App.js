import React from 'react'
import Search from './Search'
import Stories from './Stories'
import Pagination from './Pagination'
import './App.css'

const App = () => {
  return (<>
  <div className="container my-3">
        <h2 className='text-center'>News Tech - Top Headlines</h2>
    <Search />
    <Stories />
    <Pagination />
    </div>
    </>
  )
}

export default App