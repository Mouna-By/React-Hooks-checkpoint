import React, { useState } from 'react';
import {Form,Button} from 'react-bootstrap'
const AddNewMovie = ({addFunction}) => {
    const[input,Setinput] = useState({id:Math.random})
    return (
    <div>
    <Form>
    <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Movie Title</Form.Label>
<Form.Control type="text" placeholder="Enter title" onChange={(e)=>Setinput({...input,title:e.target.value})}/>
    <Form.Label>Movie rate</Form.Label>
    <Form.Control type="number" placeholder="Enter rate" onChange={(e)=>Setinput({...input,rate:e.target.value})}/>
    <Form.Label>Movie description</Form.Label>
    <Form.Control type="text" placeholder="Enter description" onChange={(e)=>Setinput({...input,description:e.target.value})} />
    <Form.Label>Movie image url</Form.Label>
<Form.Control type="text" placeholder="Enter url" onChange={(e)=>Setinput({...input,posterUrl:e.target.value})} />
    
    </Form.Group>


    <Button onClick={()=>addFunction(input)} style={{marginBottom:"50px"}} variant="primary" >
    Submit
    </Button>
</Form>
    </div>)
};

export default AddNewMovie;
