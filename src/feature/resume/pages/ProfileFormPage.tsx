import {  Container, Header } from "semantic-ui-react";
import ProfileForm from "../../profile/components/ProfileForm";

const ProfileFormPage = () => {

    return (

        <Container>

            <Header size='medium' textAlign='center' as='h2' >
                Profile
            </Header>
            <ProfileForm />

        </Container>
    )


}

export default ProfileFormPage;