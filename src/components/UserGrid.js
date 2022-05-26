import React, { useEffect,useState } from 'react'
import { getUser } from '../helpers/getUser';
import { UserGridItem } from './UserGridItem';

export const UserGrid = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        getUser().then(setImages);
    }, [])
    
  
    
  return (
    <div className=' bg-light container'>
        <h3>User</h3>
        <hr />  
        <div className="row">
        {
            images.map(img=>(
                <UserGridItem 
                    key={img.id}
                    {...img}/>
            ))
           }
        </div>  
    </div>
  )
}
