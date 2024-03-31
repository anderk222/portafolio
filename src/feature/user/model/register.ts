export interface Register {
    
    name:       string;
    mail:       string;
    password:   string;
    userDetail: {
        phone: string;
    };
};

export function registerDefault(): Register{

    return {
        mail: '',
        name: '',
        password: '',
        userDetail: {
            phone: ''
        }
    }

}