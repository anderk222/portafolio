import { Field, Form, Formik } from "formik";
import { Button, Checkbox, Container, Form as UIform, Header, Icon, Label, LabelGroup, Segment } from "semantic-ui-react";
import { Project, project_schema } from "../model/project";
import { useFetch } from "../../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { useAuthContext } from "../../../context/AuthProvider";
import { useEffect } from "react";
import { getProject, saveProject, saveProjectByToken, updateProject, updateProjectByToken } from "../service/project.api";
import SelectTool from "../../../shared/SelectTool";


const FormProyect = () => {

  const { run, status, data } = useFetch<Project>();

  const { id } = useParams();

  const auth = useAuthContext();


  useEffect(() => {

    if (!id) return;

    run(() => getProject(id));

  }, [id]);

  useEffect(() => { }, [data]);

  return (
    <Container >
      <Segment color="blue" >
        <Header size='large' textAlign='center' as='h2' >
          Nuevo proyecto
        </Header>
        <Formik<Project>
          initialValues={data || {
            id: 0,
            name: '',
            url: '',
            detail : '',
            tools: [],
            images: []

          }}
          enableReinitialize={true}
          onSubmit={handlerSubmit}
          validationSchema={project_schema}
        >
          {({ values, errors, setFieldValue, isSubmitting }) => (
            <Form className="ui form" >
              <UIform.Field>
                <label>Title</label>
                <Field placeholder="Proyect's name" name="name" />
              </UIform.Field>
              <UIform.Field>
                <label>Url</label>
                <Field placeholder="Proyect's web" name="url" />
              </UIform.Field>
              <SelectTool onChange={(_,data) => setFieldValue('tool.id', data.value)} />
              <UIform.TextArea
              onChange={(event)=>setFieldValue('detail', event.target.value)}
              >
              </UIform.TextArea>

              <UIform.Field>
                <label>Imagenes</label>
                <Field placeholder="Proyect's web" />
              </UIform.Field>
              <div className="flex w-full pb-2" >
                <Label  >
                   Imagen
                    <Icon name="delete" />
                </Label>
              </div>  
              <Button loading={isSubmitting} color="green" type='submit'>Submit</Button>
              <pre>{JSON.stringify(errors)}</pre>
            </Form>
          )}
        </Formik>
      </Segment >
    </Container>
  );


  async function handlerSubmit(values: Project){

    let action : (body: Project)=>Promise<Project>;

    console.log(':)');
    

    if(!id){
    
      if(auth.isAuthenticated()) action=saveProjectByToken;
      else action=saveProject
    
    }else{

      if(auth.isAuthenticated()) action = updateProjectByToken
      else action = updateProject

    }

    try{

     await action(values);

    }catch(err){
      
    };

  }
}

export default FormProyect;