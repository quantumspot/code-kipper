import React, { useRef } from 'react'
import { useHistory } from 'react-router-dom'
import { Container, FormInput, SubmitButton, Label, Title, RegisterText } from './Login.styles'
import axios from 'axios'

const Login = () => {
  const emailInput = useRef()
  const passwordInput = useRef()
  const history = useHistory()
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    const email = emailInput.current.value
    const password = passwordInput.current.value

    const response = await axios.post('/login', {email, password})
    console.log(response)
    console.log(response.data)
    if(response.status === 200) {
      //redirect
      history.push('/')
    }else {
      //show error message and ask to sign in again 
      window.alert('Incorrect login, please try again')
    }
    
  }


  return (
    <Container onSubmit={handleSubmit}>
      <Title>Code Kipper</Title>
      <Label>Email</Label>
      <FormInput type="text" placeholder="email" ref={emailInput} />
      <Label>Password</Label>
      <FormInput type="password" placeholder="password" ref={passwordInput}/>
      <SubmitButton type="submit">Submit</SubmitButton>
      <RegisterText>Not registered? <a href="/register">Create an account</a></RegisterText>
    </Container>
  )
}

export default Login
