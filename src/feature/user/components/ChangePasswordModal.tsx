import { Header, Modal } from "semantic-ui-react";
import ChangePasswordForm from "../../auth/components/ChangePasswordForm";
import { UseBoolean } from "../../../hooks/useBoolean";

function ChangePasswordModal({ userId, toggle, onClose, onSaved }:props) {

    return (
        <Modal
            open={toggle.boolean}
            onClose={onClose}
        >
            <Modal.Header>Change Password</Modal.Header>
            <Modal.Content>
                <Modal.Description>
                    <ChangePasswordForm admin userId={userId} onSaved={onSaved} />
                </Modal.Description>
            </Modal.Content>

        </Modal>
    )



}

type props = {

    userId : number,
    toggle : UseBoolean,
    onClose : ()=>void,
    onSaved : ()=>void
}
export default ChangePasswordModal;