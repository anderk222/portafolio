import * as Yup from 'yup';

export type ChangePassword= {

    oldPassword?: string;

    newPassword: string;

    confirmPassword?: string;
}



    // export function changePasswordDefault(admin: true): ChangePasswordAdmin;

    // export function changePasswordDefault(admin: false): ChangePassword;

    // export function changePasswordDefault(): ChangePassword;

    // export function changePasswordDefault(admin?: undefined): ChangePassword;


export function changePasswordDefault(admin : boolean | undefined = false): ChangePassword
{

    if( admin)return {newPassword: ''} 
    else return {newPassword: '', oldPassword:'', confirmPassword: ''};

}

export const changePaswordSchemaAdmin = Yup.object({

    newPassword: Yup.string()
    .min(3, 'New password have at least 3 characters')
    .required('New password is required'),

});

export const changePaswordSchema = changePaswordSchemaAdmin.shape({

    oldPassword : Yup.string()
    .min(3, 'Password should have at least 3 characters')
    .required('Password is required'),
    confirmPassword : Yup.string().oneOf([Yup.ref('newPassword')], "contrasena no coincide")
    .min(3, 'Password must have at least 3 characters')
    .required('Confirm password is required')

});
