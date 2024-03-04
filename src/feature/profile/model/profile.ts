export interface Profile {
    id:       number;
    position: string;
    detail:   string | null  
    img:      string | null;
}

export function profileDefault(): Profile{
  
    return {
        id: 0,
        position:'',
        detail: '',
        img:''
    }

} 