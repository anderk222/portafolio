import { useNavigate } from "react-router-dom";
import { Container, Header, Image, List, ListContent, ListDescription, ListHeader, ListItem } from "semantic-ui-react";

function AdminPage(){

    const navigate = useNavigate();

    return(
        <Container>
        <Header size='large' textAlign='center' as='h2' >
            Administration
        </Header>
        <List divided size="medium" relaxed>

            <ListItem as={'a'} onClick={() => navigate('tool')} >
                <Image avatar src='https://cdn-icons-png.flaticon.com/128/4873/4873868.png' />
                <ListContent>
                    <ListHeader as='b' >Tools</ListHeader>
                    <ListDescription>
                        Take lead about tools avalables.
                    </ListDescription>
                </ListContent>
            </ListItem>

            <ListItem as={'a'} onClick={() => navigate('user')} >
                <Image avatar src='https://cdn-icons-png.flaticon.com/128/921/921347.png' />
                <ListContent>
                    <ListHeader as='b' >Users</ListHeader>
                    <ListDescription>
                        Administrate users
                    </ListDescription>
                </ListContent>
            </ListItem>

            <ListItem as={'a'} onClick={() => navigate('selected-profile')} >
                <Image avatar src='https://cdn-icons-png.flaticon.com/128/6466/6466962.png' />
                <ListContent>
                    <ListHeader as='b' >Default User</ListHeader>
                    <ListDescription>
                        Change Default user
                    </ListDescription>
                </ListContent>
            </ListItem>
        </List>
    </Container>
    );

}

export default AdminPage;