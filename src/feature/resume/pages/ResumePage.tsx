import { Button, Container, Divider, Header, Icon, Label, Popup } from "semantic-ui-react";
import AboutHeader from "../components/AboutHeader";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import { useEffect } from "react";
import { useFetch } from "../../../hooks/useFetch";
import { Resume } from "../model/Resume";
import { useAuthContext } from "../../../context/AuthProvider";
import { getResume, getResumeByToken, getResumeByUser } from "../service/resume.api";
import { useNavigate, useParams } from "react-router-dom";

const ResumePage = () => {

    const { run, status, data, error, setData } = useFetch<Resume>();

    const navigate = useNavigate();

    const auth = useAuthContext();

    const { id } = useParams();

    useEffect(() => {

        obtenerResumen();

    }, []);


    return (

        <Container >
            {status === 'ok' && (
                <>
                    <AboutHeader {...{ user: data!.user, profile: data!.profile }} />
                    <Education education={data!.education} />
                    <Divider inverted /> 
                    <Experience experience={data!.experiences} />
                    <Divider inverted /> 
                    <Skills skills={data!.skills} />
                </>
            )

            }
            <div className="flex justify-center w-full" >
                {auth?.isAuthenticated() && (
                    <Button onClick={() => navigate('/config/resume')}>
                        <Icon name="edit" ></Icon></Button>)}
            </div>

        </Container>

    );

    function obtenerResumen() {

        let action: () => Promise<Response>;

        if (id) {
            action = () => getResumeByUser(id);
        }

        else if (auth.isAuthenticated()) {

            action = getResumeByToken;

        } else {

            action = getResume;
        }

        run(action);

    }

}

export default ResumePage;