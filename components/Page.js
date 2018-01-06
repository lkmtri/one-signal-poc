import registerNotification from 'modules/notification'
import { injectGlobal } from 'styled-components';

injectGlobal`
  * {
    box-sizing: border-box;
  }

  body {
    display: block;
    margin: 8px;
  }

  p {
    margin: 0;
  }

  button:focus {
    outline: none;
  }

  button:hover {
    cursor: pointer;
  }
` 
class Page extends React.PureComponent {
  componentDidMount() {
    registerNotification()
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

export default Page