import { Field, Formik, Form } from "formik";
import { Profile, profileDefault } from "../model/profile";
import { useFetch } from "../../../hooks/useFetch";
import { useEffect } from "react";
import { getProfilesByToken, saveProfileByToken, updateProfileByToken } from "../service/profile.api";
import { Button, Image, Form as UIForm } from "semantic-ui-react";
import { env } from "../../../environments/var-environments";

const ProfileForm = () => {

    const { run, data } = useFetch<Profile>();

    useEffect(() => {

        run(() => getProfilesByToken())

    }, []);

    useEffect(()=>{

    }, [data])

    return (
        <Formik
            initialValues={data || profileDefault()}
            enableReinitialize={true}
            onSubmit={handlerSubmit} 
        >
            {({ setFieldValue, values, errors, isSubmitting }) => (

                <Form className="ui form">

                    <div className="flex gap-2 flex-col" >
                        <Image size="medium" src={values?.img || env.fallback_prof_img} />
                        <Button type="button" icon labelPosition='left' size="medium">
                            Update Image
                        </Button>
                    </div>
                    <UIForm.Field>
                        <label>Position</label>
                        <Field name="position" placeholder="Your current Job Profile" />
                    </UIForm.Field>


                    <UIForm.Field>
                        <UIForm.TextArea 
                        label='Profile Description'
                        onChange={(event)=>setFieldValue('detail', event.target.value)}
                        value={values.detail || ''}
                        />
                    </UIForm.Field>

                    <UIForm.Button disabled={isSubmitting} loading={isSubmitting} >
                        Guardar
                    </UIForm.Button>

                </Form>

            )}
        </Formik>
    )

    async function handlerSubmit(values: Profile) {

        let { id } = values;
        let action: (body: Profile) => Promise<Profile>;

        console.log(id);
        

        if (!id) {

            action = saveProfileByToken;

        } else {

            action = updateProfileByToken

        }

        try {

            await action(values);

        } catch (err) {

        };

    }

}

export default ProfileForm;