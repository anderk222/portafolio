import { Box, Snackbar } from '@mui/material';
import { useEffect } from 'react'
import { useSnack } from '../hooks/useSnack';
import { resetSession } from '../utils/session';
import router from '../router';

export const RequestSnack = () => {


    const { onErrorSnack, onSuccessSnack, onLoadSnack, state, closeSnack } = useSnack();

    const successMessages: Record<string, string> = {
        'POST': 'Record created successfully',
        'PUT': 'Record updated successfully',
        'PATCH': 'Record updated successfully',
        'DELETE': 'Record deleted successfully',
    };

    function requestInterceptor() {

        const { fetch: originalFetch } = window;
        window.fetch = async (...args) => {

            let [resource, config] = args


            try {

                onLoadSnack();

                const response = await originalFetch(resource, config);

                closeSnack();

                if (response.status === 401) {
                    resetSession();
                    router.navigate('/auth');
                    throw new Error('Session expired');
                }

                if (response.status != 200 && response.status != 201) {

                    let error = await response.json() as any;


                    throw new Error(error.message)

                }

                const method = config?.method?.toUpperCase();
                if (method && successMessages[method]) {
                    onSuccessSnack(successMessages[method]);
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