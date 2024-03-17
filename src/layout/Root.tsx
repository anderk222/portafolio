import ModalProvider from '../context/ModalProvider'
import Header from './Header'

const Root = () => {
  return (
    <ModalProvider>
      
       <Header />
    </ModalProvider>
  )
}

export default Root