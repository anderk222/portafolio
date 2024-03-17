import * as Yup from 'yup';

export type ChangePassword= {

    oldPassword: string;

    newPassword: string;

    confirmPassword: string;
}

export function changePasswordDefault(): ChangePassword{

    return {newPassword: '', oldPassword:'', confirmPassword: ''};

}

export const changePaswordSchema = Yup.object({

    oldPassword : Yup.string()
    .min(3, 'Password should have at least 3 characters')
    .required('Password is required'),
    newPassword: Yup.string()
    .min(3, 'New password have at least 3 characters')
    .required('New password is required'),
    confirmPassword : Yup.string().oneOf([Yup.ref('newPassword')], "contrasena no coincide")
    .min(3, 'Password must have at least 3 characters')
    .required('Confirm password is required')

});