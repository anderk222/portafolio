import { Button, Divider, Icon } from "semantic-ui-react";
import { social } from "../../../helpers/about";

const AboutHeader = () => {

    return (
        <>
            <section className="flex justify-between items-center" >
                <div>
                <h1 className="text-5xl" >
                    Anderson Macias
                </h1>
                <p className="text-xs" >Software Developer</p>

                <p>Appacionate software Developer, main tools are SpringBoot & Angular 🎆</p>
                </div>
                <div>
                <Button
                onClick={()=> outNav(social.linkedin)}
                circular color='linkedin' size="mini" icon='linkedin' />
                <Button
                onClick={()=> outNav(social.github)}
                circular color='black' size="mini" icon='github' />
                </div>
            </section>
            <Divider inverted />
        </>
    );

};

function outNav(url : string){

    window.open(url, '_blank')


}

export default AboutHeader;