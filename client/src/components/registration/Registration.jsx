import React, {useState} from 'react'
import { registration } from '../../actions/user'
import Input from '../../utils/input/Input'
import './Registration.css'

const Registration = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  return (
    <div className="registration">
      <div className="registration__header">Sign Up</div>
      <Input value={email} setValue={setEmail} type="text" placeholder="Email..."/>
      <Input value={password} setValue={setPassword} type="password" placeholder="Password..."/>
      <button onClick={() => registration(email, password)} className="registration__btn">Sign up</button>
    </div>
  )
}

export default Registration
