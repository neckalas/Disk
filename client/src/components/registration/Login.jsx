import React, {useState} from 'react'
import Input from '../../utils/input/Input'
import './Registration.css'
import {useDispatch} from 'react-redux'

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const dispatch = useDispatch()
  return (
    <div className="registration">
      <div className="registration__header">Sign In</div>
      <Input value={email} setValue={setEmail} type="text" placeholder="Email..."/>
      <Input value={password} setValue={setPassword} type="password" placeholder="Password..."/>
      <button className="registration__btn" onClick={() => dispatch(login(email, password))}>Log in</button>
    </div>
  )
}

export default Login