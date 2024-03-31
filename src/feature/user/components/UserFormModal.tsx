import { Modal } from "semantic-ui-react";
import { UseBoolean } from "../../../hooks/useBoolean";
import UserForm from "./UserForm";
import { User } from "../model/user";

function UserFormModal({ onClose, toggle, userId, onSaved}:props){


    return (
        <Modal
            open={toggle.boolean}
            onClose={onClose}
        >
            <Modal.Header>{userId ? 'Update User' : 'New User   '}</Modal.Header>
            <Modal.Content>
                <Modal.Description>
                    <UserForm userId={userId} onSaved={handlerOnSaved} />
                </Modal.Description>
            </Modal.Content>

        </Modal>
    );

    function handlerOnSaved(user? : User){

        if(onSaved) onSaved(user)
        else toggle.toggle();

    }

}


type props = {

    userId : number,
    toggle : UseBoolean,
    onClose : ()=>void,
    onSaved? : (user?: User)=>void
}


export default UserFormModal;