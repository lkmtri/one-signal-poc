import Page from 'components/Page'
import InputWithButton from 'components/InputWithButton'
import { registerUserEmailToOneSignal } from 'tools/notification'

const Index = () => (
  <Page>
    <InputWithButton
      label="Email"
      onButtonClick={registerUserEmailToOneSignal}
      buttonString="Register Email To OneSignal"
    />
  </Page>
)

export default Index