import React from 'react'
import Footer from '../../layout/Footer';
import HeaderProyect from './HeaderProyect';
import Proyects from './Proyects';

const Proyect = () => {


    return (
        <div className="w-full flex justify-center h-screen" >
            <div className="flex flex-col w-full justify-between gap-4 h-full " >
                <div className="flex flex-col justify-center gap-4">
                    <HeaderProyect />
                    <Proyects />
                </div>
                <Footer />

            </div>
        </div>
    )
}

Proyect.displayName = "Proyect";

export default Proyect;