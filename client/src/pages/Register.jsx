import React from "react";
import { useState } from "react";

const Register = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const registerUser = (e) => {
    e.preventDefault();
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
