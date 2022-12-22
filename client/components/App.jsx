import React, { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'

import Search from './Search'
import Cover from './Cover'
import Details from './Details'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Cover />} />
        <Route path="/search" element={<Search />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </>
  )
}

export default App
