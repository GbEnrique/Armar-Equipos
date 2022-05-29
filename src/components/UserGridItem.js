import React from 'react'


export const UserGridItem = ({img,team,setTeam,images}) => {
    
 
//    funcion para agregar usuarios al equipo

const addUser=(imagen)=>{
    
    setTeam([...team, imagen])
    
}
  return (
    
        <div className='col' >
            <div className='card' style={{ width: 180, margin:10 }}>
                <img className='' src={img.url} alt={img.name} />
                <div className='card-body'>
                    
                    <p className='card-text'>{img.name}</p>
                    
                    {images &&(
                    <button 
                        className='btn btn-success btn-sm'
                        onClick={()=>addUser(img)}>
                        Add to Team
                    </button>
                    ) }
                   
                </div>
            </div>
        </div>
        
    
  )
}

