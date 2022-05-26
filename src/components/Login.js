import { useState } from "react"
import { useAuth } from "../context/authContext";
import { Link, useNavigate } from "react-router-dom";
import { Alert } from "./Alert"; 


export const Login = () => {

  const [user, setUser] = useState({
    email:'',
    password:''
  });

  const {login,loginWithGoogle,resetPassword}=useAuth();
  const navigate=useNavigate();
  const [error, setError] = useState();

  const handleChange=({target:{name,value}})=>{
    setUser({
      ...user,
      [name]:value
    })
  }
  const handleGoogleSignin=async()=>{
    try {
      await loginWithGoogle();
      navigate("/");
    } catch (error) {
      setError(error.message)
    }
  }
  const handleSubmit= async (e) => {
    e.preventDefault();
    setError('');

    try {
      await login(user.email,user.password);
      navigate('/'); 
    } catch (error) {
      setError(error.message)
    }
  }

  const handleResetPassword =async()=>{
    if (!user.email) {
      return setError("Please enter your Email");      
    }else{
      try {
        await resetPassword(user.email);
        setError("We sent you and email with a link to reset your password");   
      } catch (error) {
        setError(error.message);
      }
    }
  }
  return (
    <div className="container-sm ">
     <div className="d-flex flex-column min-vh-100 justify-content-center align-items-center">      
     <div className="card p-5 text-light bg-dark mb-5">
      <div className="card-header">
        <h3>Log in</h3>
      </div>
      {error && <Alert message={error}/>}
        <form onSubmit={handleSubmit} className="border-bottom p-4 form">
          <div className="m-4">
            <label  className="form-label"htmlFor="email" >Email</label> 
            <input 
              type="email" 
              className="form-control"
              name="email" 
              placeholder="yourEmail@gmail.com"
              onChange={handleChange}/>
          </div>
          <div className="m-4">
            <label className="form-label" htmlFor="password">Passwrod</label>
            <input 
              type="password"
              className="form-control"
              name="password" 
              id="password"
              placeholder="******"

              onChange={handleChange}/>
          </div>
          <div className="column">
          <div className="m-4 d-flex align-items-center justify-content-between">
            <button type="submit" className="btn btn-secondary">Login</button>
            <a
              href="#!" 
              className="list-unstyled"
              onClick={handleResetPassword}
            >Forgot Password?</a>
          </div>
          
          
          </div>
        </form>
        <p className="small text-center">Don't have an Account <Link to="/register">Register</Link> </p>
        <button 
            onClick={handleGoogleSignin}
            className="m-4 btn btn-outline-light ">
            Login whith Google</button>
      </div>
     </div>
    </div>
  )
}
