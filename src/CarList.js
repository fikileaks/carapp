import React from 'react'

const CarList = (props) => {
  const {loading, error, posts} = props
 
  return (
    <> <div className='App'>
    <div className="font-helvetica text-2xl font-thin">HELLO HELVETICA apakah masuk?</div>
    <ol>
    {loading && <div>Loading Cuy...</div> }
    {(!loading && !error ) && posts.map((post,index) => ( <li key={index} className='bg-red-200 my-5'>
      <div>{post.name}</div>
      <div>{post.price}</div>
      <img src={post.image} alt={post.name} className='w-52'></img>
    </li>
      ))}
    {(!loading && error) && <div>Unexpected Error</div>}
    </ol>
  </div></>
  )
}

export default CarList

