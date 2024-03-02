import { Field, Form, Formik } from "formik";
import { Experience } from "../experience";
import { Form as UIForm }  from 'semantic-ui-react';

const ExperienceForm = ({experience}: props)=>{

    return(

        <Formik
        
        initialValues={experience}
        onSubmit={()=>{}}
        >
         <Form className="ui form">

           <UIForm.Field>
             <label >Pocition</label>
             <Field name='position'  placeHolder='Position name' />

           </UIForm.Field>

           <UIForm.Field>
             <label >Company</label>
             <Field name='company'  placeHolder='Position name' />

           </UIForm.Field>

           <UIForm.Field>
             <UIForm.TextArea label='Detail' name='detail'  placeHolder='Details' />
           </UIForm.Field>

          <UIForm.Group>
            <UIForm.Button>Save</UIForm.Button>
            </UIForm.Group>

         </Form>

        </Formik>
        
    )
};

type props ={

  experience :  Experience

}

export default ExperienceForm;