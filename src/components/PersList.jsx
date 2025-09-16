import React from 'react'
import { Button, Card, CardBody, CardText, CardTitle } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

export const PersList = ({pers, setPers}) => {

    const handleDelete =(id)=> {
        setPers(prev => prev.filter(obj=>obj.id!=id))
    }

  return (
    <div className='row' style={{display:'flex', gap:'10px', paddingTop:'20px', borderTop: '1px solid white', flexWrap:'wrap', alignContent:'center', justifyContent:'center', maxWidth:'1200px', margin:'0 auto'}}>
      {pers.map(obj=>(
        <Card className='col-md-3 col-sm-6' key={obj.id}
  style={{
    width: '18rem',
    padding:'5px',
    borderTopRightRadius:'5px',
    borderTopLeftRadius:'5px',
    boxShadow:'1px 1px 5px 2px gray'
  }}
>
  <img
  className='img-fluid kepek'
    alt="Sample"
    src={obj.image}
  />
  <CardBody>
    <CardTitle tag="h5">
      {obj.name}
    </CardTitle>
    <Button onClick={()=>handleDelete(obj.id)}>
      Delete
    </Button>
  </CardBody>
</Card>
      ))}
    </div>
  )
}