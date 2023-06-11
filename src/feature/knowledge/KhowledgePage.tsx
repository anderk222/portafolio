import Footer from "../../layout/Footer"
import PaginationPortafolio from "../../shared/PaginationPortafolio"
import ItemsKnowledge from "./components/ItemsKnowledge"
import KhowledgeHeader from "./components/KhowledgeHeader"
import './knowledge.css';

const KhowledgePage = () => {
  return (
    <div className="w-full flex justify-center h-screen" >
      <div className="flex flex-col w-full justify-between gap-4 h-full " >
        <div className="flex flex-col gap-4">
        <KhowledgeHeader />
        
        <ItemsKnowledge />
        <PaginationPortafolio />
        </div>
        <Footer /> 
      </div>
    </div>
  )
}

export default KhowledgePage;