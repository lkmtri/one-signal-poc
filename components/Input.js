import PropTypes from 'prop-types'
import { Field } from 'redux-form'
import styled from 'styled-components'

const InputContainer = styled.div`
  width: 400px;
  position: relative;
  height: 50px;
  margin: 0px auto 8px auto;
  display: block
`

const InputPlaceholder = styled.p`
  position: absolute;
  top: 0;
  left: 0;
  color: grey;
  padding-left: 10px;
  padding-top: 15px;
  transform: ${props => props.isFocus ? 'scale(0.7, 0.7)' : 'scale(1, 1)'};
  transform-origin: 0 0;
  transition: 0.2s transform ease-in-out;
`

const StyledInput = styled.input`
  width: 100%;
  max-width: calc(100vw - 16px);
  height: 50px;
  font-size: 14px;
  border: 1px grey solid;
  position: absolute;
  top: 0;
  left: 0;
  padding: 20px 10px 10px 10px;

  &:focus {
    outline: none;
    border: 1px black solid;
  }
`

class Input extends React.PureComponent {
  state = {
    isFocus: false
  }

  onFocus = () => {
    this.setState({ isFocus: true })
    this.props.input.onFocus()
  }

  onBlur = () => {
    this.setState({ isFocus: false })
    this.props.input.onBlur()
  }

  render() {
    const { input: { value, onChange}, placeholder } = this.props
    const { isFocus } = this.state
    return (
      <InputContainer>
        <StyledInput onChange={onChange} value={value} onFocus={this.onFocus} onBlur={this.onBlur}/>
        <InputPlaceholder isFocus={isFocus || value !== ''}>{placeholder}</InputPlaceholder>
      </InputContainer>
    )
  }
}

export default (props) => (
  <Field component={Input} props={props} {...props} />
)