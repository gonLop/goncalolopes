import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


function Project(props) {

    return (
        <Row className={"mt-5"}>
            <Col md={6}>
                <h2 className={"text-center"}>{props.project}</h2>
                <p><b>Type of project:</b> {props.typeOfProject}</p>
                <p className={"text-justify"}>{props.text}</p>
                <p><b>{props.pl}</b></p>
            </Col>
            <Col md={6} className={"text-center"}>
                <img src={props.img}/>
            </Col>
        </Row>
    );
}

export default Project;