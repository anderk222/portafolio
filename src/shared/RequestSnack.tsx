import { Box, Snackbar } from '@mui/material';
import { useEffect } from 'react'
import { useSnack } from '../hooks/useSnack';

export const RequestSnack = () => {


    const { onErrorSnack, onLoadSnack, state, closeSnack } = useSnack();

    function requestInterceptor() {

        const { fetch: originalFetch } = window;
        window.fetch = async (...args) => {

            let [resource, config] = args


            try {

                onLoadSnack();

                const response = await originalFetch(resource, config);

                closeSnack();

                if (response.status != 200 && response.status != 201){

                    let error = await response.json() as any;
                    

                    throw new Error(error.message)

                }

             
                return response;

            } catch (err: any) {


                onErrorSnack(err.message)

                throw new Error(err.message)

            }

        };
    };

    useEffect(() => {
        requestInterceptor()
    }, []);

    useEffect(() => {
    }, [state]);

    return (
        <Box>
            <Snackbar
                open={state.open}
                message={state.text}
            />
        </Box>
    );









}