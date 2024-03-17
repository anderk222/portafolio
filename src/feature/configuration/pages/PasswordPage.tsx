import { Container } from "@mui/material";
import { Header } from "semantic-ui-react";
import ChangePasswordForm from "../../auth/components/ChangePasswordForm";

export default function PasswordPage(){

    return(
        <Container>
            <Header size='large' textAlign='center' as='h2' >
                Password
            </Header>

            <ChangePasswordForm />

        </Container>
    )


};

