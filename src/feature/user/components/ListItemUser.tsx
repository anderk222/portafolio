import { Button, ButtonGroup, Icon, Image, ListContent, ListHeader, ListItem } from "semantic-ui-react";
import { User } from "../model/user";

function ListItemUser({ user, onClickDelete, onClickPassword, onSetDefault }: props) {

    return (

        <ListItem>
            <Image avatar src='https://react.semantic-ui.com/images/avatar/small/joe.jpg' />
            <ListContent>
                <ListHeader>{user.name}</ListHeader>
                {user.mail}

            </ListContent>
            <ListContent floated="right">
                <ButtonGroup size='tiny' color="black">
                    <Button aria-label="Change password" className="tooltip" color="black"
                        onClick={() => onClickPassword(user.id)} icon='key' />
                    {/* <Button color="black" icon='edit' /> */}
                    <Button aria-label="Set as default" className="tooltip" 
                    onClick={()=>onSetDefault(user.id)}
                    icon='pin' ></Button>
                    <Button aria-label="delete" className="tooltip" onClick={() => onClickDelete(user.id)} color="red" icon='delete' />
                </ButtonGroup>

            </ListContent>
        </ListItem>
    )

}

type props = {

    user: User,
    // onClickEdit(id: number): void,
    onClickDelete(id: number): void,
    onClickPassword(id: number): void,
    onSetDefault(id: number): void
};

export default ListItemUser;