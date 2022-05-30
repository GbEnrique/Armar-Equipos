import React from 'react'
import { UserGrid } from './UserGrid';
import { useNavigate } from "react-router-dom";
export const UserApp = () => {
  const navigate = useNavigate();
  const handleBack=()=>{
    try {
      // await logout();
    navigate("/");
    } catch (error) {
      
    }
  }
  return (
    <div>
        <h3 className='text-light'>UserApp</h3>
        <hr/>
        <button 
          onClick={handleBack}
          className="ms-4 btn btn-outline-secondary">
          Back
        </button>
        <ol>
        <UserGrid  />
        </ol>
    </div>
  )
}


