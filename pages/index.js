import { Page } from 'components'
import withRedux from 'modules/store'
import { registerUserEmailToOneSignal, sendNotification } from 'modules/notification'
import { RegisterEmailForm, SendNotificationForm } from 'containers'

const handleRegisterEmailFormSubmit = ({ email }) => registerUserEmailToOneSignal(email)

const Index = () => (
  <Page>
    <RegisterEmailForm onSubmit={handleRegisterEmailFormSubmit}/>
    <SendNotificationForm onSubmit={sendNotification}/>
  </Page>
)

export default withRedux(Index)