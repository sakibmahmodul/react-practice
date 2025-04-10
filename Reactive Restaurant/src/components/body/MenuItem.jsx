import React from "react";
import Menu from './Menu';
import {Card, CardImg, CardImgOverlay, CardBody, CardTitle} from 'reactstrap';

const MenuItem = props => {
    return(
        <div>
            <Card style={{margin: '10px'}}>
                <CardBody>
                    <CardImg width="100%" alt={props.dish.name} src={props.dish.image} style={{opacity: '0.5'}} />
                    <CardImgOverlay>
                        <CardTitle style={{textAlign: 'center', cursor: 'pointer'}} onClick={props.onDishSelect}>{props.dish.name}</CardTitle>
                    </CardImgOverlay>
                </CardBody>
            </Card>
        </div>
    )
}
export default MenuItem;