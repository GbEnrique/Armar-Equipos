// import { Modal } from 'bootstrap';
import React, { useEffect,useState } from 'react'
import { Button,Modal } from 'react-bootstrap';
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
  
  //Ventana MOdal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    
  return (
    <div className=' bg-light container'>
        <div className="d-flex justify-content-between align-items-center">
            <h3>User</h3>
            <Button variant="primary" onClick={handleShow}>
                See teams
            </Button>
        </div>
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
        
      

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>List Team</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Team team={team} setTeam={setTeam}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
      
        
        
        </div>  
    </div>
  )
}
