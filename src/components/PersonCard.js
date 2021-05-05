import React, { Component } from 'react';
import {Card, CardBody, CardTitle, CardSubtitle} from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";


class PersonCard extends Component{
    render(){
        return(
            <div>
                <Card border="secondary" style={{ width: '18rem' }}>
                    <CardBody className="p-0">
                        <CardTitle style={{ width: '100%', backgroundColor: "#777", borderColor: "#777" }}><h2>{this.props.infoCard[0]}, {this.props.infoCard[1]}</h2></CardTitle><br></br>
                        <CardSubtitle className="mb-2 text-muted">Age: {this.props.infoCard[2]}</CardSubtitle><br></br>
                        <CardSubtitle className="mb-2 text-muted">Hair Color: {this.props.infoCard[3]}</CardSubtitle>
                    </CardBody>
                </Card> <br></br><br></br>
            </div>
        );
    }
}


export default PersonCard;