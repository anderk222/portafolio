import Footer from '../../../layout/Footer';
import HeaderTool from '../component/HeaderTool';
import Tools from '../component/Tools';
import { useBoolean } from '../../../hooks/useBoolean';

const Tool = () => {

    const toggle = useBoolean();

    return (
        <div className="w-full flex justify-center h-screen" >
            <div className="flex flex-col w-full justify-between gap-4 h-full " >
                <div className="flex flex-col justify-center gap-4">
                    <HeaderTool {...{toggle}} />
                    <Tools {...{toggle}} />
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default Tool;