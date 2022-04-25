import React from 'react'
import Navigation from './components/Navigation'
import {Header} from './components/Header'
import SearchBox from './components/SearchBox'
import Footer from './components/Footer'

const Layout = () => {
  return (
    <>
      <Navigation/>
       <Header/> 
       <SearchBox/>
       <Footer/>
    </>
  )
}

export default Layout
