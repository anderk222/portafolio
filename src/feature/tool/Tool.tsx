import Footer from '../../layout/Footer';
import HeaderTool from './component/HeaderTool';
import Tools from './component/Tools';

const Tool = () => {
    return (
        <div className="w-full flex justify-center h-screen" >
            <div className="flex flex-col w-full justify-between gap-4 h-full " >
                <div className="flex flex-col justify-center gap-4">
                    <HeaderTool />
                    <Tools />
                </div>
                <Footer />

            </div>
        </div>
    )
}

export default Tool;