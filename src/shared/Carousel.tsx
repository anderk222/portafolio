import { useEffect } from "react";
import { useCurrent } from "../hooks/useCurrent";
import { Button, Image } from "semantic-ui-react";

function Caurosel({ images }: props) {

    const { current, change } = useCurrent({ url: '', idx: 0 });

    useEffect(() => {

        if (!images.length) return;

        change({ ...current, url: images[0].url });

    }, []);

    useEffect(() => {


    }, [current])


    return (
        <div className="w-full h-full" >

            {images.map((image, i) => (
                <Image
                    key={i}
                    size='huge'
                    centered
                    src={image.url}
                    hidden={i !== current.idx}

                />
            ))}
            <br/>
            <div className="flex justify-center ">
                <Button
                    disabled={current.idx === 0}
                    icon='angle left'
                    onClick={handlerRedo}
                />
                <Button
                    disabled={current.idx === images.length-1}
                    icon='angle right'
                onClick={handlerNext}
                />
            </div>

        </div>
    );

    function handlerNext(){

        let idx = current.idx+1;

        let newCurrent = {idx, url : images[idx].url }

        change(newCurrent);

    }

    function handlerRedo(){

        let idx = current.idx-1;

        let newCurrent = {idx, url : images[idx].url }

        change(newCurrent);

    }



}

type props = {

    images: { id?: number, url: string }[]

}

export default Caurosel;