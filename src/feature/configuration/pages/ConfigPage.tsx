import { useNavigate } from "react-router-dom"
import { Container, Header, Image, List, ListContent, ListDescription, ListHeader, ListItem } from "semantic-ui-react"

const ConfigPage = () => {

    const navigate = useNavigate();

    return (
        <Container>
            <Header size='large' textAlign='center' as='h2' >
                Configuration
            </Header>
            <List divided size="medium" relaxed>

                <ListItem as={'a'} onClick={() => navigate('home-text')} >
                    <Image avatar src='https://cdn-icons-png.flaticon.com/128/1946/1946436.png' />
                    <ListContent>
                        <ListHeader as='b' >Home Text</ListHeader>
                        <ListDescription>
                            Edit your welcome message on the home page
                        </ListDescription>
                    </ListContent>
                </ListItem>

                <ListItem as={'a'} onClick={() => navigate('resume')} >
                    <Image avatar src='https://cdn-icons-png.flaticon.com/128/9772/9772462.png' />
                    <ListContent>
                        <ListHeader as='b' >Resume</ListHeader>
                        <ListDescription>
                            Change your profile description, actual position, photo, etc.
                        </ListDescription>
                    </ListContent>
                </ListItem>

                <ListItem as={'a'} onClick={() => navigate('password')} >
                    <Image avatar src='https://cdn-icons-png.flaticon.com/128/11135/11135307.png' />
                    <ListContent>
                        <ListHeader as='b' >Password</ListHeader>
                        <ListDescription>
                            Change your password
                        </ListDescription>
                    </ListContent>
                </ListItem>

            </List>
        </Container>
    )

}

export default ConfigPage;