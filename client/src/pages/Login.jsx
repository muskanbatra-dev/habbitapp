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
      const header = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const {data} = await axios.post(' http://localhost:3000/login',{
        email,
        password
      },{
        credentials: "include",
        header
      },)
      if(data.error){
        toast.error(data.error)
      }
      else{
        setData({})
        toast.success('Login Sucessful, Welcome!')
        navigate('/')
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