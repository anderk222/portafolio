import Footer from "../../layout/Footer"
import KhowledgeHeader from "./components/KhowledgeHeader"
import './knowledge.css';
import Skills from './components/Skills';
import { useBoolean } from '../../hooks/useBoolean';

const KhowledgePage = () => {

  const modal = useBoolean()

  return (
    <div className="w-full flex justify-center h-screen" >
      <div className="flex flex-col w-full justify-between gap-4 h-full " >
        <div className="flex flex-col gap-4">
        <KhowledgeHeader />
        
        <Skills toggle={modal} />
       
        </div>
        <Footer /> 
      </div>
    </div>
  )
}

export default KhowledgePage;