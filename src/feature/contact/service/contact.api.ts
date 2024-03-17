import { env } from '../../../environments/var-environments';
import { Message } from '../model/Message';
const url = env.url + '/contact'

const headers = {
    'Content-Type': 'application/json'
}

export async function sendMail(body: Message) {

    const res = await fetch(url+'/mail', {
        headers,
        method: 'POST',
        body: JSON.stringify(body)
    })

    if (res.status != 200){
        
        let data = await res.json();
        throw new Error(data.message);
        
    };


}