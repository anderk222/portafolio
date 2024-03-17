import { useEffect, useState } from "react";

export function useSnack(){


    const [ state, setState ] = useState({text: 'Cargando', open : false  });

    useEffect(()=>{}, [state]);


    return {
        state,
        setState,
        onErrorSnack,
        onLoadSnack,
        open : state.open,
        message: state.text,
        closeSnack
    };

    function onErrorSnack(message: string, time=3000){

        setState((state)=>{
            return {
                open: true,
                text: message
            }
        });

        setTimeout(closeSnack, time);

    }

    function onLoadSnack(){

        setState((state)=>{
            return {
                open: true,
                text: 'Loading...'
            }
        });
    }

    function closeSnack(){
        setState(function(state){

            return {...state,open:false}

        })
    }
    


}