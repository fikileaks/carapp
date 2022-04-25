import React from 'react'
import DropCar from './DropCar'
function SearchBox() {
  return (
    <form>
      <DropCar />
      <h3>Pencarianmu</h3>
      <div className='flex bg-violet-500'>
        <div className=''></div>
        <button>cari Mobil</button>
      </div>  
    </form>
  )
}

export default SearchBox
