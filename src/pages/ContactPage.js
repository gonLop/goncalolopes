import React from "react";
import HeaderContacts from "../components/HeaderContacts";
import Container from "react-bootstrap/Container";
import ContactsComponent from "../components/ContactsComponent";

function ContactPage(props) {

    return (
        <div>
            <HeaderContacts title={props.title}/>
            <Container fluid={false}>
                <ContactsComponent/>
            </Container>
        </div>
    );
}

export default ContactPage;