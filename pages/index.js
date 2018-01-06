import { Page } from 'components'
import withRedux from 'modules/store'
import { registerUserEmailToOneSignal } from 'modules/notification'
import { RegisterEmailForm } from 'containers'

const handleRegisterEmailFormSubmit = ({ email }) => registerUserEmailToOneSignal(email)

const Index = () => (
  <Page>
    <RegisterEmailForm onSubmit={handleRegisterEmailFormSubmit} />
  </Page>
)

export default withRedux(Index)