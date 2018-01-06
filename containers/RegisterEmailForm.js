import { Form, reduxForm } from 'redux-form'
import { Input, Button } from 'components'

class RegisterEmailForm extends React.PureComponent {
  render() {
    const { handleSubmit } = this.props
    return (
      <Form onSubmit={handleSubmit}>
        <Input name="email" type="text" placeholder="Email"/>
        <Button type="submit">Register Email</Button>
      </Form>
    )
  }
}

export default reduxForm({
  form: 'RegisterEmailForm'
})(RegisterEmailForm)