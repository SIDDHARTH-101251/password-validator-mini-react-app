// Write your code here
import {useState} from 'react'
import {
  MainContainer,
  Card,
  Heading,
  Para,
  InputElement,
  ErrorMsg,
} from './styledComponents'

const PasswordValidator = () => {
  const [password, setPassword] = useState('')
  const onChangePassword = event => {
    setPassword(event.target.value)
  }
  console.log(password.length)
  return (
    <MainContainer>
      <Card>
        <Heading>Password Validator</Heading>
        <Para>Check how strong and secure is your password</Para>
        <InputElement
          type="password"
          onChange={onChangePassword}
          value={password}
        />
        {password.length >= 8 ? (
          ''
        ) : (
          <ErrorMsg>Your password must be at least 8 characters</ErrorMsg>
        )}
      </Card>
    </MainContainer>
  )
}

export default PasswordValidator
