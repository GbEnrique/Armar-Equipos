import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext"
import { UserApp } from "./UserApp";


export const Home = () => {  
  const {user,logout,loading} = useAuth();
  const navigate = useNavigate();

  const handleLogout=async()=>{
    try {
      await logout();
    navigate("/login");
    } catch (error) {
      
    }
  }


  
if(loading) return (<h2>Loading</h2>)
  return (
    <div>
      <h1>Home</h1>
      <hr/>
      <div className="d-flex justify-content-between align-items-center">
        <h2>Wellcome {user.email}</h2>
        <button 
          onClick={handleLogout}
          className="mt-auto btn btn-secondary">
          Logout
        </button>
      </div>
      <hr/>      
      <UserApp/>
      

     
    </div>
  )
}
