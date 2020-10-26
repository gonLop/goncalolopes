import React from "react";
import HeaderProjects from "../components/HeaderProjects";
import Container from "react-bootstrap/Container";
import ProjectComponent from "../components/ProjectComponent";

function ProjectsPage(props) {

    return (
        <div>
            <HeaderProjects title={props.title}/>
            <Container fluid={false}>
                <ProjectComponent/>
            </Container>
        </div>
    );
}

export default ProjectsPage;