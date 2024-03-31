import { Container, Header } from "semantic-ui-react";
import SelectedProfiles from "../components/SelectedProfiles";
import SelectedProfile from "../components/SelectedProfile";

function SelectedProfilePage() {

    return (
        <Container>

            <Header size="large" textAlign="center" >Default User</Header>

            <SelectedProfile />

            <Header size="medium" >
                History
            </Header>

            <div  className="max-w-xs">

                <SelectedProfiles />
            </div>
        </Container>

    );

}



export default SelectedProfilePage;