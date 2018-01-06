import PropTypes from 'prop-types'

class InputWithButton extends React.PureComponent {
  static propTypes = {
    label: PropTypes.string,
    placeholder: PropTypes.string,
    buttonString: PropTypes.string,
    showButton: PropTypes.bool,
    onButtonClick: PropTypes.func
  }

  static defaultProps = {
    label: '',
    placeholder: '',
    buttonString: '',
    showButton: true,
    onButtonClick: () => {}
  }

  onButtonClick = () => this.props.onButtonClick(this.input.value)

  render() {
    const { label, placeholder, buttonString, showButton } = this.props
    return (
      <div>
        {label}
        <input placeholder={placeholder} ref={input => this.input = input}/>
        {showButton && <button type="button" onClick={this.onButtonClick}>{buttonString}</button>}
      </div>
    )
  }
}

export default InputWithButton