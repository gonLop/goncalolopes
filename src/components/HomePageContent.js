import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import img from "../img/profile.jpg";
import {Linkedin} from 'react-feather';
import {GitHub} from 'react-feather';
import {Mail} from 'react-feather';


function HomePageContent() {

    return (
        <Container fluid={false}>
            <Row>
                <Col md={6}>
                    <Row className={"text-center"}>
                        <Col>
                            {<img src={img} alt="Profile picture" className={"profile_img"}/>}
                        </Col>
                    </Row>
                    <Row className={"mt-5 text-center"}>
                        <Col>
                            <div className={"p-2 social_btns"}>
                                <a href={"https://www.linkedin.com/in/gon%C3%A7alo-lopes-8454b4172/"} target="_blank" rel={"nooper noreferrer"}>
                                    <Linkedin size={35}/>
                                </a>
                            </div>
                            <div className={"p-2 social_btns"}>
                                <a href={"https://github.com/gonLop"} target="_blank" rel={"nooper noreferrer"}>
                                    <GitHub size={35}/>
                                </a>
                            </div>
                            <div className={"p-2 social_btns"}>
                                <a href={"mailto:contactgoncalo@gmail.com"} target="_blank" rel={"nooper noreferrer"}>
                                    <Mail size={35}/>
                                </a>
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col md={6}>
                    <Row className={"p-3 text-justify"}>
                        <h2>About me</h2>
                        <p className={"mt-1"}>Hello! My name is Gonçalo Lopes and I'm 20 years old. Right now I'm in
                            the third year of my degree in Computer Science at the
                            Polytechnic Institute of Beja in Portugal.</p>
                        <p>You can find my curriculum <a href={"https://europa.eu/!rd44Yy"} target={"_blank"}>here</a>.</p>
                    </Row>
                    <Row className={"mt-2 p-3 text-justify"}>
                        <h2>Technical Skills</h2>
                        <p className={"mt-1"}>Since I started my degree I have worked with a wide variety of
                            programming languages that I have used in various academic and personal projects.
                            In the following list are the languages I've worked with.</p>
                        <Row className={"text-center"}>
                            <Col className={"boxL"}>
                                Java
                            </Col>
                            <Col className={"boxL"}>
                                Python
                            </Col>
                            <Col className={"boxL"}>
                                JavaScript
                            </Col>
                            <Col className={"boxL"}>
                                Kotlin
                            </Col>
                            <Col className={"boxL"}>
                                C/C++
                            </Col>
                        </Row>
                        <p className={"mt-1"}>I also worked with <b>HTML, CSS and Bootstrap</b> in web development
                            projects, <b>SQL</b> when there was a need to use databases and
                            I used frameworks like <b>React and Flask</b>.</p>
                    </Row>
                    <Row className={"mt-2 p-3 text-justify"}>
                        <h2>Hobbies and Interests</h2>
                        <p className={"mt-1"}>
                            In my free time, besides dedicating myself to some small projects,
                            I like reading books of the most diverse genres, fishkeeping and playing sports like
                            football or going to the gym. I'm also very interested in exploring nature and socializing
                            with my friends.
                        </p>
                    </Row>
                </Col>
            </Row>
        </Container>

    );

}

export default HomePageContent;