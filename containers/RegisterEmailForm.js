import { Form, reduxForm } from 'redux-form'
import { Input, Button, Container } from 'components'

const RegisterEmailForm = ({ handleSubmit }) => (
  <Container>
    <Form onSubmit={handleSubmit}>
      <Input name="email" type="text" placeholder="Email"/>
      <Button type="submit">Register Email</Button>
    </Form>
  </Container>
)

export default reduxForm({
  form: 'RegisterEmailForm'
})(RegisterEmailForm)