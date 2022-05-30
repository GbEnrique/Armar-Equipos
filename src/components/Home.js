import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext"
 


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

  const ViewTeam=()=>{
    navigate("/newteam");
  }

  
if(loading) return (<h2>Loading</h2>)
  return (
    <div className="container min-vh-100">
      <h1 className="text-light">Home</h1>
      <hr/>
      <div className="d-flex justify-content-between ">
        <h2>Wellcome {user.email}</h2>
        <button 
          onClick={handleLogout}
          className="mt-auto btn btn-secondary">
          Logout
        </button>
      </div>
      <div className="mt-5 d-flex align-items-start ">  

     
      <hr/>      
      <div className="card p-5 text-light bg-dark mb-5">
        <button 
          className="btn btn-outline-primary"
          onClick={ViewTeam}>
            Create new Team
        </button>
      </div>
      </div>
      
      
     
    </div>
  )
}
