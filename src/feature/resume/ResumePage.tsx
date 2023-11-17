import { Container, Divider, Header, Icon, Label, Popup } from "semantic-ui-react";
import AboutHeader from "./components/AboutHeader";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skills";

const ResumePage = () => {


    return (

        <Container>
            <AboutHeader />
            <Education />
            <Experience />
            <Skills />
        </Container>

    )

}

export default ResumePage;