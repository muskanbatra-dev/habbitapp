import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-hot-toast'

const Login = () => {
  const [data,setData]= useState({
    email: "",
    password: "",
  })
  const loginUser = async(e)=>{
    e.preventDefault()
    const {email , password} = data
    try {
     
      const {data} = await axios.post(' http://localhost:3000/login',{
        email,
        password
      })

      console.log(data)
      if(data.error){
        toast.error(data.error)
      }
      else{
        setData({})
        navigate('/')
        toast.success('Login Sucessful, Welcome!')
        
      }
    } catch (error) {
      toast.error
    }
  }
  return (
    <div>
      <form onSubmit={loginUser}>
      <label>Email</label>
        <input type='email' placeholder='enter email..' value={data.email}
        onChange={(e)=>setData({...data, email:e.target.value})}
        />

        <label>Password</label>
        <input type='password' placeholder='enter password..'
        value={data.password}
        onChange={(e)=>setData({...data,password:e.target.value})}/>

        <button type='submit'>Login</button>
      </form>
    </div>
  )
}

export default Login