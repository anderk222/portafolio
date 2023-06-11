import FloatCubeComponent from './FloatCubeComponent'

const FloatCubeContainer = ({ count}: props) =>{
 
    return (
   <div className='fixed w-full h-screen ' >

    {[...Array(count)].map((value, index)=>(
        <FloatCubeComponent key={index} />
    ))

    }

   </div> 
  )
}

type props = {
    count : number
    
}

export default FloatCubeContainer