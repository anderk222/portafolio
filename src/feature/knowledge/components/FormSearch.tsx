import { Button, Checkbox, Container, Form } from 'semantic-ui-react'

const FormSearch = () => {
  return (
    <Form>
    <Form.Field>
      <label>Skill name</label>
      <input placeholder='write skill name, example typescript' />
    </Form.Field>
    <Form.Field>
      <label>Type</label>
      <input placeholder="Select type's skill" />
    </Form.Field>
    <Form.Field>
      <Checkbox label='I agree to the Terms and Conditions' />
    </Form.Field>
    <Button type='submit'>Submit</Button>
  </Form>
  )
}

export default FormSearch;