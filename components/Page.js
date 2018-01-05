import registerNotification from 'tools/notification'

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