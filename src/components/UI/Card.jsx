import React from 'react'
import {Card,Col,Badge} from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function CustomCard({ele}) {
  return (
    <div>
  
    <Col>
      <Card>
        <Link to={`/Movie/${ele.id}`}>
        <Card.Img variant="top" src={ele.posterURL} />
        </Link>
        <Card.Body>
          <Card.Title>{ele.title}</Card.Title>
          <Card.Text>
            {ele.description>30 ? ele.description.substring(0, 28) + '...': ele.description}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <Badge pill bg={ele.rating>7 ? "primary":'danger'}>
        {ele.rating}
        </Badge>
        </Card.Footer>
      </Card>
    </Col>
    
    </div>
  )
}
