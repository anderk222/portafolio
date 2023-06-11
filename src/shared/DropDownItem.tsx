import  {ReactElement} from 'react'

const DropDownItem = ({children, text}:props) => {

  return (
    <div className="flex cursor-pointer px-4 py-2  gap-1 items-center hover:bg-slate-100" >
    {children}
    <button>{text}</button>
    </div>
  )
}

type props = {
    children: ReactElement,
    text : string
}

export default DropDownItem