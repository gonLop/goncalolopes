import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

function Footer(){

    return(
        <footer className={"mt-5 mb-3"}>
            <Container fluid={true}>
                <Row className={"border-top justify-content-center pt-3"}>
                    Developed by Gonçalo Lopes Copyright © 2020
                </Row>
            </Container>
        </footer>
    );

}

export default Footer;