import { Form, reduxForm } from 'redux-form'
import { Input, Button, Container } from 'components'

const SendNotificationForm = ({ handleSubmit }) => (
  <Container>
    <Form onSubmit={handleSubmit}>
      <Input name="email" type="text" placeholder="Email(s)"/>
      <Input name="heading" type="text" placeholder="Notification heading"/>
      <Input name="content" type="text" placeholder="Notification content"/>
      <Input name="redirectURL" type="text" placeholder="Redirect URL"/>
      <Button type="submit">Send Notification</Button>
    </Form>
  </Container>
)

export default reduxForm({
  form: 'SendNotificationForm'
})(SendNotificationForm)