import axios from "axios";
import React from "react";
import { useState } from "react";
import {toast} from "react-hot-toast"
import { useNavigate } from "react-router-dom";
const Register = () => {
  const navigate = useNavigate()
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const registerUser = async(e) => {
    e.preventDefault();
    const {name, email , password} = data
    try {
      const header = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const {data} = await axios.post(' http://localhost:3000/register ',{
        name, email , password
      },header)
      if (data.error){
        toast.error(data.error)
      } else{
        setData({})
        toast.success('Login Sucessful, Welcome!')
        navigate('/login')
      }
    } 
    catch (error) {
      console.log("going to catch")
     console.log(error)
    }
    
  };
  return (
    <div>
      <form onSubmit={registerUser}>
        <label>Name</label>
        <input type="text" value={data.name} placeholder="enter name.." onChange={(e) => setData({...data, name:e.target.value})} />

        <label>Email</label>
        <input type="email" value={data.email} placeholder="enter email.." onChange={(e) => setData({...data, email:e.target.value})}/>

        <label>Password</label>
        <input
          type="password"
          value={data.password}
          placeholder="enter password.."
          onChange={(e) => setData({...data, password:e.target.value})}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Register;
