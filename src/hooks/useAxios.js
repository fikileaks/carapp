import { useState, useEffect } from 'react'
import axios from 'axios'

export default function useAxios(url) {
  const [response, setResponse] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState({})
  //pengennya ketika pertama kali di render, manggil axiosnya
  useEffect(() => {
    setLoading(true)
    axios
      .get(url)
      .then((response) => {
        setLoading(false)
        setResponse(response)
      })
      .catch((error) => {
        setLoading(false)
        setError(error)
      })
  }, [])

  return { loading, response, error }
}

//! Di bagian ..... kita nulis
/* 
import React from 'react'
! JANGAN LUPA PANGGIL IMPORT2AN NYA YAAAKKK WKWKWKWKWK

function CarList() {
const navigate = useNavigate()
const {loading, response, error} = useAxios('https://jsonplaceholder.typicode.com/posts/1')

const handleClick = () => {
    navigate(`/detail/${id}`)
}
  return (
    <div>useAxios</div>
    <ol>
    {
        !loading && (
            response.data.map((post)=> {
                <li>{post.title}</li>
            })
        )
    }</ol>
  )
}

export default useAxios
*/
