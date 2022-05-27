import { useEffect } from "react";
import { useAuth } from "../context/authContext"

export const ViewTeams = () => {
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
        <h1>My Team</h1>
        <hr />
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
