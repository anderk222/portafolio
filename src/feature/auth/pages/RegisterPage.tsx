import { UserSave } from "../../../feature/user/model/user";
import { Field, Form, Formik } from "formik";
import { Link } from "react-router-dom";
import { Container, Divider, FormField, Form as UIform } from "semantic-ui-react";
import { register } from "../service/auth.api";

const RegisterPage = () => {

  return (

    <div className="flex flex-col justify-center items-center h-screen">
      <Container>
        <h1 className="text-xl text-center" >Registro</h1>
        <p className="text-center" >Hola, Bienvenido ✌️</p>
        <Divider />
        <Formik<UserSave &{confirmPassword : string}>
          initialValues={{
            name:'',
            mail: '',
            password:'',
            confirmPassword: '',
            userDetail:{
              phone:''
            }
          }}
          onSubmit={handlerSubmit}
        >
          {({ values, errors, setValues, setFieldValue, isSubmitting }) => (
            <Form className="ui form " >

              <UIform.Group>
                <UIform.Field type="text" required width={8}>
                  <label>Names</label>
                  <Field name="name" type="text" placeholder='full name' />
                </UIform.Field>
                <UIform.Field type="email" required width={8}>
                  <label>Email</label>
                  <Field name="mail" type="email" placeholder='Email' />
                </UIform.Field>
              </UIform.Group>

              <UIform.Field required >
                <label>Password</label>
                <Field name="password" placeholder='Password' />
              </UIform.Field>
              <UIform.Field required >
                <label>Confirm password</label>
                <Field name="confirmPassword" placeholder='Corfirm password' />
              </UIform.Field>

              <UIform.Field required >
                <label>Phone number</label>
                <Field name="userDetail.phone" placeholder='Phone number  ' />
              </UIform.Field>
              <Link className="underline hover:underline" to={'/auth'}>Already have account?</Link>
              <br />
              <br />
              <UIform.Button loading={isSubmitting} type="submit">Registrarse</UIform.Button>
            </Form>
          )}

        </Formik>
      </Container>
    </div>
  );

  async function handlerSubmit(values: UserSave &{confirmPassword : string}){

    console.log(values);
    
    try{

      await register(values);

    }catch(error){
      console.log(error);
    }

  }
}

export default RegisterPage;