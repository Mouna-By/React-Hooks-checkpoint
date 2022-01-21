import React from 'react';
import {Card,Button} from 'react-bootstrap'
import ReactStars from 'react-stars'


const MovieCards = ({title,description,url,rate}) => {
    return (
    <div>
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={url} />
    <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Title> 
        <ReactStars
                count={rate}
                size={24}
                color2={'#ffd700'} /> 
        </Card.Title>
        <Card.Text> {description} </Card.Text>
        <Button variant="primary">More</Button>
    </Card.Body>
    </Card>   

    </div>)
    
};

export default MovieCards;
