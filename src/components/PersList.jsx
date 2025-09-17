import React from 'react'
import { Button, Card, CardBody, CardText, CardTitle } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { MyModal } from './MyModal';
import { useState } from 'react';

export const PersList = ({pers, setPers}) => {

    const handleDelete =(id)=> {
        setPers(prev => prev.filter(obj=>obj.id!=id))
    }

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    const [kep, setKep] = useState(null)

    const [nev, setNev] = useState(null)

    const futi = ()=> {
    document.querySelector('.modal').style.display='flex'
}

    const handleClick =(kepe, neve)=> {
      setKep(kepe)
      setNev(neve)
      toggle()
      futi()
    }

  return (
  <>
    <div className='row' style={{display:'flex', gap:'10px', paddingTop:'20px', borderTop: '2px solid white', flexWrap:'wrap', alignContent:'center', justifyContent:'center', maxWidth:'1200px', margin:'0 auto'}}>
      {pers.map(obj=>(
        <Card className='col-md-3 col-sm-6' key={obj.id}
          style={{
            width: '18rem',
            padding: '5px',
            borderTopRightRadius: '5px',
            borderTopLeftRadius: '5px',
            boxShadow: '1px 1px 5px 2px gray'
          }}
        >
          <img
            className='img-fluid kepek'
            alt="Sample"
            style={{cursor:'pointer'}}
            onClick={()=>handleClick(obj.image, obj.name)}
            src={obj.image} />
          <CardBody>
            <CardTitle tag="h5">
              {obj.name}
            </CardTitle>
            <Button onClick={() => handleDelete(obj.id)}>
              Delete
            </Button>
          </CardBody>
        </Card>

      ))}
    </div>
    <MyModal kep={kep} nev={nev} modal={modal} setModal={setModal}/>
    </>
  )
}