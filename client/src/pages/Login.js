import React from 'react'
import '../styles/Regstyle.css'
import { Form, Input,message } from 'antd'
import { useDispatch } from 'react-redux'
import { showLoading, hideLoading } from '../redux/features/alertSlice'
import axios from 'axios'
import { Link,useNavigate } from 'react-router-dom'

const Login = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const onfinishHandler = async(values) => {

    try {
      dispatch(showLoading())
      const res = await axios.post('/api/v1/user/login', values)
      dispatch(hideLoading())
      if(res.data.success){
        localStorage.setItem('token', res.data.token)
        message.success("Login Successfully")
        navigate("/")
      }
      else{
        message.error(res.data.message)
      }
      
    } catch (error) {
      dispatch(hideLoading())
      console.log(error)
      message.error("Something went wrong")
      
    }
    
    
  }
  return (
    <>
    <div className='form-container'>
      <Form layout='vertical' onFinish={onfinishHandler} className='card1'>
        <h1>Login</h1>
        <Form.Item label="Email" name='email'>
          <Input type='email' required/>
        </Form.Item>
        <Form.Item label="Password" name='password'>
          <Input type='password' required/>
        </Form.Item>
        <button className='btn-primary1' type='submit'>Login</button>
        <p>New User? <Link to='/register'>Register here</Link></p>
      </Form>
    </div>
  </>
  )
}

export default Login