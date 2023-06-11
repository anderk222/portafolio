import React from 'react'
import ModalProvider from '../context/ModalProvider'
import Footer from './Footer'
import Header from './Header'

const Root = () => {
  return (
    <ModalProvider>
      
       <Header />
    </ModalProvider>
  )
}

export default Root