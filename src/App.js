import { Routes, Route } from 'react-router-dom'
// import React, { useState, useEffect } from 'react'
// import CarList from './CarList'
import React from 'react'
import Layout from './Layout'

// import axios from 'axios'
// import CarDetail from './Contact'

//! Elemen adalah halaman yang kita buat
function App() {
/*   const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    setLoading(true)
    axios
      .get('https://rent-cars-api.herokuapp.com/customer/car')
      .then((response) => {
        // console.log(response)
        setPosts(response.data)
        setLoading(false)
      })
      .catch((error) => {
        console.log(error)
        setLoading(false)
        setError(true)
      })
  }, []) */

  return (
    <div>
      <Routes>
        {/* <Route path='/' element={<CarList posts={posts} loading={loading} error={error} />}></Route> */}
        <Route path='/' element={<Layout/>}></Route>

      </Routes>
    </div>
  )
}
//! NESTED ROUTING DIBACA Y Y Y !!!
export default App
