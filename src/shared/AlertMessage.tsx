import { useEffect, useState } from "react";
import { Container, Message } from "semantic-ui-react"

const AlertMessage = (props : AlertMessageProps)=>{

    const [ open, setOpen ] = useState(false);

    useEffect(()=>{

        let isClosedAlert =  JSON.parse(localStorage.getItem("closealert") || "false") as boolean;

        if(isClosedAlert) return;

        setOpen(true);


    },[]);


    if(open) return(
        <Container>
        <Message  
        onDismiss={handlerClose}
        header="warning" content={props.content} color='yellow' />
        </Container>
    );

    return <></>;

    function handlerClose(){

        setOpen(false);

        localStorage.setItem("closealert", "true");

    };
};


export type AlertMessageProps = {

    content : string

}

export default AlertMessage;