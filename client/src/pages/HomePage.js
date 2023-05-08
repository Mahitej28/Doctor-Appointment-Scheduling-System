import React, {useEffect} from 'react'
import axios from 'axios'
import Layout from '../components/Layout'

//sending token from clients
const HomePage = () => {

  //login user data
  const getUserData = async() => {

    try {
      
      //we will get data from user by calling the endpoint
      const res = await axios.post('/api/v1/user/getUserData', {}, {
        headers:{
          Authorization: "Bearer "+ localStorage.getItem('token')
        }
      })

      console.log(res)
      
    } catch (error) {
        
      console.log(error)
    }
  }

  useEffect(()=>{
      getUserData();
  },[])

  return (
    <Layout><h1>Welcome to the Application</h1></Layout>
  )
}

export default HomePage