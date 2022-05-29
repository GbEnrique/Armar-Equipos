import { useEffect } from "react";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";

export const ViewTeams = () => {

  const navigate = useNavigate();
  const handleBack=()=>{
    try {
      // await logout();
    navigate("/newteam");
    } catch (error) {
      
    }
  }

  const {teams} = useAuth();
  useEffect(()=>{
      if(teams)
      teams.data.map((team=>(
        team.map((a)=>(
            console.log(a.name)
        ))
      )))
  })
  return (
    <div>
        <h1 className="text-light">My Team</h1>
        <hr />
        <button 
          onClick={handleBack}
          className="mt-auto btn btn-secondary">
          Back
        </button>
        {
            teams && 
                teams.data.map((team,i)=>
                    <div  className="bg-white">
                        <h3>team #{i+1}</h3>
                       {
                        
                         team.map((a)=>(
                            <li>{a.name}</li>
                        ))   
                       }
                    </div>
                ) 
        }
    </div>
  )
}
