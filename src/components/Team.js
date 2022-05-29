import React from 'react'
import {  useNavigate } from "react-router-dom";
import { useAuth } from '../context/authContext';
// import { AppContext } from '../context/cardContext'


export const Team = ({team,setTeam}) => {

    const navigate=useNavigate();

    const {teams,addTeams} = useAuth();

    const AddTeam=async()=>{
        await addTeams(team);
        navigate('/viewteam');;
    }
    
  return (
    <div>
        <h3>Team</h3>
         <div className="container">{team.length===0 ?(<p>0</p>):(
         <div className="row align-items-start"  >
            <div className="col-5">
            {
                team.map(user =>
                <li className="" 
                    key={user.id}
                    img={user}
                    team={team}
                    >{user.name}</li>)
            }
            </div>
            <div className='col-5'>
                <button onClick={AddTeam}
                    className='btn btn-primary'>Add Team</button>
            </div>
        </div>
              
        )}</div>
        
    </div>
  )
}
