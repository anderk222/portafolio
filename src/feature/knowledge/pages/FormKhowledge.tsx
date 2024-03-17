import { Formik, Form, Field } from "formik";
import { Button, Container, Form as UIForm, Header, Segment } from "semantic-ui-react";
import { khowledge, khowledge_schema } from "../model/khowledge";
import { useFetch } from "../../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getSkill, saveKnowledge, saveKnowledgeByToken, updateKnowledge, updateKnowledgeByToken } from "../service/khowledge.api";
import SelectTool from "../../../shared/SelectTool";
import { Tool } from "../../tool/tool";
import { useAuthContext } from "../../../context/AuthProvider";


const FormKhowledge = () => {

  const { run, status, data } = useFetch<khowledge>();

  const { id } = useParams();

  const auth = useAuthContext();


  useEffect(() => {


    if (!id) return;

    run(() => getSkill(id));

  }, [id]);

  useEffect(() => { }, [data]);

  return (
    <Container >
      <Segment color="blue" >

        <Header size='large' textAlign='center' as='h2' >
          New Khowledge
        </Header>

        <Formik<khowledge>
          initialValues={data || {
            id: 0,
            level: 10,
            time: '',
            tool: { id: 0 } as Tool

          }}
          enableReinitialize={true}
          onSubmit={handlerSubmit}
          validationSchema={khowledge_schema}

        >
          {({ values, errors, setValues, setFieldValue, isSubmitting, touched }) => (
            <Form className="ui form">
              <UIForm.Field>
                <SelectTool onChange={(_, data) => setFieldValue('tool', data.value)} />
                { typeof errors.tool?.id == 'string' &&
                  (<p className='text-red-500 text-xs' > {errors.tool.id}</p>)
                }
              </UIForm.Field>
              <UIForm.Field>
                <UIForm.Input
                  label={`Percentage skill: ${values.level}`}
                  min={10}
                  max={100}
                  name='level'
                  step={10}
                  value={values.level}
                  type='range'
                  onChange={(data) => { setFieldValue('level', parseInt(data.target.value), false) }}
                />
              </UIForm.Field>
              <UIForm.Field>
                <label>Time</label>
                <Field placeholder="Time use it" name="time" />
                {touched.time && typeof errors.time == 'string' &&
                  (<p className='text-red-500 text-xs' > {errors.time}</p>)
                }
              </UIForm.Field>
              <Button loading={isSubmitting} color="green" type='submit'>Save</Button>
            </Form>

          )}
        </Formik>
      </Segment >
    </Container>
  );

  async function handlerSubmit(values: khowledge) {

    let action: (body: khowledge) => Promise<khowledge>;

    if (!id) {

      if (auth.isAuthenticated()) action = saveKnowledgeByToken;
      else action = saveKnowledge

    } else {

      if (auth.isAuthenticated()) action = updateKnowledgeByToken
      else action = updateKnowledge

    }

    try {

      await action(values);

    } catch (err) {

    };

  }
}

export default FormKhowledge;