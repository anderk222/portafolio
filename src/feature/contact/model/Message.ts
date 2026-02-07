
import * as Yup from 'yup';



export type Message = {

    fullName: string,
    username: string,
    message: string

}

export function messageDefault(): Message{

    return {
        fullName: '',
        username: '',
        message: ''
    }

}


export const contactSchema = Yup.object().shape({
    fullName: Yup.string().min(4, 'this field must have as min 4 characteres').required('this field is required'),
    username: Yup.string().email('this must a email').required('this field is required'),
    message: Yup.string().min(5, 'this field must have as min 4 characteres').required('this field is required')
});