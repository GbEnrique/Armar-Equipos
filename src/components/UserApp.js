import React from 'react'
import { UserGrid } from './UserGrid';

export const UserApp = () => {
   
  return (
    <div>
        <h3 className='bg-white'>UserApp</h3>
        <hr/>
        <ol>
        <UserGrid  />
        </ol>
    </div>
  )
}
