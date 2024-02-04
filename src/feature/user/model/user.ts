export interface UserSave {
    name:       string;
    mail:       string;
    password:   string;
    userDetail: {
        phone: string;
    };
}