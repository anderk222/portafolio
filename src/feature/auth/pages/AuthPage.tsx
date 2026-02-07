import { Field, Form, Formik, FormikHelpers } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { Divider, Form as UIform } from "semantic-ui-react";
import { Auth } from "../models/Auth";
import { useAuthContext } from "../../../context/AuthProvider";

const AuthPage = () => {

  const auth = useAuthContext();

  const navigate = useNavigate();

  return (

    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-xl text-center" >Login</h1>
      <p className="text-center" >Hola, Bienvenido otra vez ✌️</p>

      <Divider/>
      <Formik<Auth>
        initialValues={{
          name : '',
          password: ''
        }}
        onSubmit={handlerSubmit}
      >
        {({ values, errors, setValues, setFieldValue, isSubmitting }) => (
          <Form className="ui form w-96" >
            <UIform.Field required>
                <label>Email</label>
                <Field placeholder="Email" name="name" />
              </UIform.Field>
            <UIform.Field required >
              <label>Password</label>
              <Field name="password" placeholder='Password' type="password" />
            </UIform.Field>

            <Link className="underline hover:underline" to={'register'}>Doesn't have account yet?</Link>

            <br />
            <br />
            <UIform.Button loading={isSubmitting} type="submit">Acceder</UIform.Button>
          </Form>
        )}

      </Formik>
    </div>

  );

  async function handlerSubmit(values: Auth, formikHelpers: FormikHelpers<Auth>){

    try{
 
      await auth.logIn(values);

      navigate('/');

    }catch(err){

      
    }



  }
}

export default AuthPage;