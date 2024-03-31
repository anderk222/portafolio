import { Role } from "../../role/model/Role";

export interface UserSave {
    id : number
    name:       string;
    mail:       string;
    password:   string;
    roles : Role[]
    userDetail: {
        phone: string;
    };
}

export interface User {
    id: number,
    name : string
    mail : string

}

export function userDefault(): UserSave{

    return {
        id: 0,
        name: '',
        mail: '',
        password: '',
        userDetail: {
            phone: ''
        },
        roles : []
    }

}