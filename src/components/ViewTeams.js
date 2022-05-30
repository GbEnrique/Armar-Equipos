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
    <div className="container bg-dark vh-100">
        <h1 className="text-light">History Team</h1>
        <hr />
        <button 
          onClick={handleBack}
          className="mt-auto btn btn-secondary">
          Back
        </button>
          <div className="row">
          {
            teams && 
                teams.data.map((team,i)=>
                  <div className="col mt-4">
                      <div className="card mb-4  shadow-lg" style={{width:310}}>
                        <div  className="bg-white">
                          <div className="border-bottom">
                            <h3 className="card-title text-secondary p-2">Team #{i+1}</h3>
                          </div>
                            <ul className="list-group">
                            {                          
                            team.map((a)=>(
                                <li className="list-group-item">{a.name}</li>
                            ))   
                          }
                            </ul>
                        </div>
                      </div>
                    </div>
                ) 
        }
          </div>
    </div>
  )
}
