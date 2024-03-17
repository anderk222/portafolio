import { Field, Form, Formik } from "formik";
import { Button, Container, Form as UIform, Header, Icon, Label, Segment } from "semantic-ui-react";
import { Project, project_schema } from "../model/project";
import { useFetch } from "../../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { useAuthContext } from "../../../context/AuthProvider";
import { useEffect, useRef } from "react";
import { getProject, saveProject, saveProjectByToken, updateProject, updateProjectByToken } from "../service/project.api";
import SelectTool from "../../../shared/SelectTool";


const FormProyect = () => {

  const { run, status, data } = useFetch<Project>();

  const { id } = useParams();

  const auth = useAuthContext();

  const refImgInput = useRef<HTMLInputElement>(null);


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
            quickDetail: '',
            url: '',
            detail: '',
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

              <UIform.Field>
                <label>Quick Detail</label>
                <Field placeholder="Write a quick detail" name="quickDetail" />
              </UIform.Field>
              <UIform.Field>
                <SelectTool
                  onChange={(_, data) => {

                    setFieldValue('tools', [...values.tools, data.value]);

                  }}
                />
              </UIform.Field>
              <div className="flex w-full pb-2" >
                {values.tools.map(tool => (
                  <Label  >
                    {tool.name}
                    <Icon name="delete" onClick={() => {
                      setFieldValue('tools', [...values.tools.filter(tool => tool.id !== tool.id)]);

                    }}
                    />
                  </Label>
                ))}
              </div>

              <UIform.TextArea
                onChange={(event) => setFieldValue('detail', event.target.value)}
                value={values.detail}
              >
              </UIform.TextArea>

              <UIform.Field>
                <label>Imagenes</label>
                <input ref={refImgInput} placeholder="Images' project" onKeyUp={(event) => {

                  if (event.key == 'Enter') {

                    event.preventDefault();

                    if (!refImgInput.current) return;

                    setFieldValue('images', [...values.images, { id: 0, url: refImgInput.current.value }]);

                    refImgInput.current.value = '';


                  }
                }} />
              </UIform.Field>
              <div className="flex w-full pb-2" >
                {values.images.map(image => (
                  <Label image >
                    <img src={image.url} alt="" />
                    Image
                    <Icon name="delete" onClick={() => {
                      setFieldValue('images', [...values.images.filter(image => image.url !== image.url)]);

                    }} />
                  </Label>
                ))}
              </div>
              <Button loading={isSubmitting} color="green" type='submit'>Submit</Button>
            </Form>
          )}
        </Formik>
      </Segment >
    </Container>
  );


  async function handlerSubmit(values: Project) {

    let action: (body: Project) => Promise<Project>;



    if (!id) {

      if (auth.isAuthenticated()) action = saveProjectByToken;
      else action = saveProject

    } else {

      if (auth.isAuthenticated()) action = updateProjectByToken
      else action = updateProject

    }

    try {

      await action(values);

    } catch (err) {

    };

  }
}

export default FormProyect;