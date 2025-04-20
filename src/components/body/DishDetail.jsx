import React from 'react'
import { Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap'
import LoadComments from './LoadComments';


function DishDetail(props) {
  const { dish, comments } = props
  return (
    <div>
      <Card style={{margin: '10px'}}>
        <CardImg top src={dish.image} alt={dish.name}/>
        <CardBody style={{textAlign: 'left'}}>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
          <hr />
          <LoadComments comments={comments} />
          <hr />
        </CardBody>
      </Card>
    </div>
  )
}

export default DishDetail