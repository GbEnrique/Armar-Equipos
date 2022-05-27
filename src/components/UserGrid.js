import React, { useEffect,useState } from 'react'
import { getUser } from '../helpers/getUser';
import { Team } from './Team';
import { UserGridItem } from './UserGridItem';

export const UserGrid = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        getUser().then(setImages);
    }, [])
    
  //Estado inicial equipos
  const [team, setTeam] = useState([]);
  
    
  return (
    <div className=' bg-light container'>
        <h3>User</h3>
        <hr />  
        <div className="row">
        {
            images.map(img=>(
                <UserGridItem 
                    key={img.id}
                    img={img}
                    team={team}
                    setTeam={setTeam}
                    images={images}/>
            ))
        }
        
        <Team team={team} setTeam={setTeam}/>
        </div>  
    </div>
  )
}
