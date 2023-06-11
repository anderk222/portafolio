import { useEffect, useState } from "react"

function FloatCubeComponent() {

  let intervalId :number | undefined;
  
  const [ position, setPosition ] = useState<randomPosition>({
    left : Math.random() *100 + "%",
    top : Math.random() * 100 +"%"
  });


  useEffect(()=>{

  intervalId = setInterval(()=>{

    setPosition({
      left : Math.random() *100 + "%",
      top : Math.random() * 100 +"%"
    })

   },2500)

   return ()=>clearInterval(intervalId);

  },[])

  return (
    <div
     style={position}
     className="absolute z-[-100] transition-float bg-white w-[12%] p-[12%] shadow-2xl" > 
    <span className="absolute" ></span>
    </div>
  )
}

type randomPosition = {
  left : string,
  top : string
}

export default FloatCubeComponent