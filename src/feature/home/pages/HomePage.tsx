import FloatCubeContainer from '../components/FloatCubeContainer'
import '../home.css';

function HomePage() {
  return (
    <div className="flex w-full h-full justify-center items-center" >
            <div className="z-10 flex p-8 flex-wrap flex-col" >
            <h2 className="md:text-[8vw] text-7xl  text-gray-700 welcome">Welcome!</h2> 
            <p className=" text-gray-700 w-fit md:text-[1.5vw] about">Hello my name is Anderson Macias, I'm tecnical in Software Developnennt 
                <br />
                I love programing, I enjoy to fix issues, develop wonderful things and learn new knowledges.
                <br />
                I call mayself as a fullStack developer 😀  
            </p> 
    </div>
    <FloatCubeContainer count={15} />   
    </div>
  )
}

export default HomePage