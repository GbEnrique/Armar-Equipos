import React from 'react'

export const UserGridItem = ({id, name, url}) => {
   
  return (
    
        <div className='col' >
            <div className='card' style={{ width: 180, margin:10 }}>
                <img className='' src={url} alt={name} />
                <div className='card-body'>
                    
                    <p className='card-text'>{name}</p>
                    
                    <button 
                        className='btn btn-success btn-sm'
                        onClick={()=>console.log(id)}>
                        Add a Team
                    </button>
                </div>
            </div>
        </div>
        
    
  )
}

