import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Header(props) {

    return(
        <Jumbotron className={"header_img bg-transparent jumbotron-fluid"}>
            <Container>
                <Row>
                    <Col>
                        { props.title && <h1 className={"header_text"}>{props.title}</h1> }
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );

}

export default Header;