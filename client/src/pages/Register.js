import React from 'react'
import '../styles/Regstyle.css'
import { Form, Input, message } from 'antd'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { showLoading, hideLoading } from '../redux/features/alertSlice'
import { Link, useNavigate} from 'react-router-dom'


const Register = () => {

  const navigate = useNavigate()

  const dispatch = useDispatch()

  const onfinishHandler = async(values) => {
    try {
      dispatch(showLoading())
      const res = await axios.post('/api/v1/user/register', values)
      dispatch(hideLoading())
      if(res.data.success){
        message.success("Registered Successfully!!")
        navigate('/login')
      }
      else{
        message.error(res.data.message)
      }
      
    } catch (error) {
      dispatch(hideLoading())
      console.log(error) 
      message.error('Something went wrong')
    }
  }
  return (
    <>
      <div className='form-container'>
        <Form layout='vertical' onFinish={onfinishHandler} className='card1'>
          <h1>Register Form</h1>
          <Form.Item label="Name" name='name'>
            <Input type='text' required/>
          </Form.Item>
          <Form.Item label="Email" name='email'>
            <Input type='email' required/>
          </Form.Item>
          <Form.Item label="Password" name='password'>
            <Input type='password' required/>
          </Form.Item>
          <button className='btn-primary1' type='submit'>Register</button>
          <p>Existing User? <Link to='/login'>Login here</Link></p>
        </Form>
      </div>
    </>
  )
}

export default Register