import { useState } from "react"
import { useAuth } from "../context/authContext";
import { Link, useNavigate } from "react-router-dom";
import { Alert } from "./Alert";


export const Register = () => {

  const [user, setUser] = useState({
    email:'',
    password:''
  });

  const {signup}=useAuth();
  const navigate=useNavigate();
  const [error, setError] = useState();

  const handleChange=({target:{name,value}})=>{
    setUser({
      ...user,
      [name]:value
    })
  }
  const handleSubmit= async (e) => {
    e.preventDefault();
    setError('');

    try {
      await signup(user.email,user.password);
      navigate('/');

    } catch (error) {
      setError(error.message)
    }
  }
  return (
    <div className="container-sm ">
      <div className="d-flex flex-column min-vh-100 justify-content-center align-items-center">      
      <div className="card p-4 text-light bg-dark mb-5">
        <div className="card-header">
          <h3>Register</h3>
        </div>
        {error && <Alert message={error}/>}

        <form onSubmit={handleSubmit}>
        <div className="m-3">
          <label  className="form-label"htmlFor="email" >Email</label> 
          <input 
            type="email" 
            className="form-control"
            name="email" 
            placeholder="yourEmail@gmail.com"
            onChange={handleChange}/>
        </div>

        <div className="m-3">
          <label className="form-label" htmlFor="password">Passwrod</label>
          <input 
            type="password"
            className="form-control"
            name="password" 
            id="password"
            placeholder="******"

            onChange={handleChange}/>
        </div>
        <p>Do you already have an account <Link to="/login">Log in</Link></p>
        <button type="submit" className="btn btn-secondary">Register</button>
       
      
          </form>
        </div>
      </div>
    </div>
  )
}
