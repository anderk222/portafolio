import { env } from "../environments/var-environments";
import { getToken, isToken } from "../utils/session";

const except =
  `${env.url}/auth/login,
  ${env.url}/auth/register`


function tokenInterceptor() {

  // if(location.pathname='/auth') return;

  const { fetch: originalFetch } = window;
  window.fetch = async (...args) => {
    let [resource, config] = args

    config = setHeaders(config, resource as string);
    
    const response = await originalFetch(resource, config);

    return response;
  };
}


function setHeaders( config : RequestInit | undefined, resource: string){
  

  let headers = config?.headers ? {
    ...config.headers
   }
   : {};

   if(isToken() && !except.includes(resource)) headers = { ...headers, 'Authorization' :  `Bearer ${getToken()}`}

   config = { ...config, headers }

   return config;

}

tokenInterceptor();