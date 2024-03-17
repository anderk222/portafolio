import { useNavigate } from "react-router-dom";
import { List, ListItem, ListContent, ListHeader, ListDescription, Image, Container, Header } from "semantic-ui-react";

const ResumeAdmiPage = () => {

  const navigate = useNavigate();


  return (
    <Container>
      <Header size='large' textAlign='center' as='h2' >
        Resume
      </Header>
      <List divided size="medium" relaxed>

        <ListItem as={'a'} onClick={() => navigate('profile')} >
          <Image avatar src='https://cdn-icons-png.flaticon.com/128/668/668709.png' />
          <ListContent>
            <ListHeader as='b' >Profile</ListHeader>
            <ListDescription>
              Change your profile description, actual position, photo, etc.
            </ListDescription>
          </ListContent>
        </ListItem>

        <ListItem as={'a'} onClick={() => navigate('experience')}>
          <Image avatar src="https://cdn-icons-png.flaticon.com/128/2666/2666427.png" />
          <ListContent>
            <ListHeader as='b' >Experience</ListHeader>
            <ListDescription>
              Add and manage your experience
            </ListDescription>
          </ListContent>
        </ListItem>

        <ListItem as={'a'} onClick={()=> navigate('education')}>
          <Image avatar src='https://cdn-icons-png.flaticon.com/128/717/717985.png' />
          <ListContent>
            <ListHeader as='b' >Education</ListHeader>
            <ListDescription>
              Give them about your education
            </ListDescription>
          </ListContent>
        </ListItem>

      </List>
    </Container>
  )


}


export default ResumeAdmiPage;