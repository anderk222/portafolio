import { ReactNode } from 'react'
const RowFlex = ({ children, aligm }:props) => {
  return (
    <div
    style={
      {
        justifyContent : aligm
      }
    }
    className='flex w-full gap-2'>
        {children}
    </div>
  )
}


type props = {
  children : ReactNode
  aligm? : string
}

export default RowFlex