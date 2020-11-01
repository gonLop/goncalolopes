import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Linkedin, Mail} from "react-feather";


class ContactsComponent extends React.Component{

    render() {
        return(
            <div>
                <Row className={"mt-5 text-center"}>
                    <Col>
                        <h2>To contact me use one of the following options:</h2>
                    </Col>
                </Row>
                <Row className={"mt-5 text-center"}>
                    <Col className={"p-2 social_btns"}>
                        <h4>By LinkedIn, message available at this link</h4>
                        <a href={"https://www.linkedin.com/in/gon%C3%A7alo-lopes-8454b4172/"} target="_blank">
                            <Linkedin size={40} className={"mt-2"}/>
                        </a>
                    </Col>
                </Row>
                <Row className={"mt-5 text-center"}>
                    <Col className={"p-2 social_btns"}>
                        <h3>Or</h3>
                    </Col>
                </Row>
                <Row className={"mt-5 text-center"}>
                    <Col className={"p-2 social_btns"}>
                        <h4>By email, available on this link or through contactgoncalo@gmail.com</h4>
                        <a href={"mailto:contactgoncalo@gmail.com"} target="_blank">
                            <Mail size={40} className={"mt-2"}/>
                        </a>
                    </Col>
                </Row>
            </div>
        );
    }


}


export default ContactsComponent;