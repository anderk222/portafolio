import { Button, Checkbox, Container, Form } from 'semantic-ui-react'

const FormSearch = () => {
  return (
    <Form>
    <Form.Field>
      <label>Name proyect</label>
      <input placeholder='write proyect name, example rick and morty' />
    </Form.Field>
    <Form.Field>
      <label>Herramientas</label>
      <input placeholder="write tool use for proyect" />
    </Form.Field>
    <Form.Field>
      <Checkbox label='I agree to the Terms and Conditions' />
    </Form.Field>
    <Button type='submit'>Search</Button>
  </Form>
  )
}

export default FormSearch;