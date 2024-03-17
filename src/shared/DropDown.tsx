import { LegacyRef, ReactElement, ReactNode, useEffect, useRef, useState } from "react"

const DropDown = ({ children, name }: props) => {

  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    
    function handleClickOutside(event : Event) 
    {
      if (ref.current && !ref.current.contains(event!.target as Node)) setOpen(false);
      else setOpen(false);
    }
    
    document.addEventListener('click', handleClickOutside);
  
    return () =>{
      document.removeEventListener('click',handleClickOutside);
    }
  }, [ref])
  

  return (
    <div className="relative text-black font-extralight " >

      <button
        onClick={handlerClik}
        className="flex items-center text-4xl justify-center" >
        {name}
        <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
        </svg>
      </button>
      <div

        className={`border shadow-lg mt-2 flex flex-col bg-white border-gray-300  rounded-sm ${!open && 'hidden'}`}
        ref={ref}
      >
        {children}
      </div>
    </div>

  )

  function handlerClik(event : React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    event.stopPropagation();

    setOpen(!open)
  }
}

type props = {
  children: ReactNode,
  name: string
}

export default DropDown