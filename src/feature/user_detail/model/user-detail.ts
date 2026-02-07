export interface UserDetail {
    id: number;
    phone: string | null;
    homeText: string | null;
}

export function userDetailDefault(): UserDetail {
    return {
        id: 0,
        phone: null,
        homeText: null
    };
}
