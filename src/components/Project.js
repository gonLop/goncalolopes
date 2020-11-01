import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


function Project(props) {

    return (
        <Row className={"mt-5 contentBox"}>
            <Col md={6}>
                <h2 className={"text-center"}>{props.project}</h2>
                <p><b>Type of project:</b> {props.typeOfProject}</p>
                <p className={"text-justify"}>{props.text}</p>
                <Row className={"text-center"}>
                    {
                        props.pl.map((t) => {
                            return <Col className={"boxL"}>{t}</Col>
                        })
                    }
                </Row>
                <br/>
            </Col>
            <Col md={6} className={"text-center"}>
                <img className={"projectImg"} src={props.img}/>
            </Col>
        </Row>
    );
}

export default Project;