import React from 'react';
import Container from "react-bootstrap/Container";
import img_proj1 from "../projsImg/lp.png"
import img_proj2 from "../projsImg/tw.jpg"
import img_proj3 from "../projsImg/ipc.jpg"
import img_proj4 from "../projsImg/connect4.png"
import img_proj5 from "../projsImg/chess.png"
import img_proj6 from "../projsImg/15puzzel3.png"
import img_proj7 from "../projsImg/todolist.png"
import Project from "./Project";


class ProjectComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            projects:[
                {project: "Image classification system",
                    img: img_proj1,
                    typeOfProject: "Individual",
                    text: "In this project, a system was made that, with the aid of the machine learning library " +
                        "\"scikit-learn\", analyzes the images provided and returns the classification of that image.",
                    pl:["Python", "Flask", "HTML", "Nginx"]
                },
                {project: "Recipe and Restaurant search site",
                    img: img_proj2,
                    typeOfProject: "Collaboration",
                    text: "Web system that allows searching for recipes and restaurants." +
                        " These tasks are supported by two API's (spoonacular API and Zomato API).",
                    pl:["React", "HTML", "CSS", "JavaScript", "Bootstrap"]},
                {project: "Android Application for Volunteering in the Food Bank",
                    img: img_proj3,
                    typeOfProject: "Collaboration",
                    text: "Android application that simulates a food bank support system",
                    pl:["Java"]},
                {project: "Connect-4 Game",
                    img: img_proj4,
                    typeOfProject: "Individual",
                    text: "Connect Four game in which players choose the color of their pieces and try " +
                        "to make a line of 4 pieces to win.",
                    pl:["Java"]},
                {project: "Chess",
                    img: img_proj5,
                    typeOfProject: "Collaboration",
                    text: "Chess game that has a board with the necessary pieces and " +
                        "the game has a time counter to control the time played by each player.",
                    pl:["Java"]},
                {project: "15 Puzzle",
                    img: img_proj6,
                    typeOfProject: "Individual",
                    text: "Game 15 puzzle. The objective is to organize the pieces in ascending order from 1 to 15. " +
                        "This game has a time counter to generate a leaderboard.",
                    pl:["Java"]},
                // {project: "Web ToDoList",
                //     img: img_proj7,
                //     typeOfProject: "Individual",
                //     text: "Simple ToDoList that allows users to post their tasks. " +
                //         "Users are allowed to mark tasks as completed, edit or delete tasks.",
                //     pl: ["HTML", "CSS", "JavaScript"]},
            ]
        }
    }

    render(){
        return (
            <Container fluid={true}>
                <p className={"introProjects"}>Here I present some of the projects that I carried out based on some of the programming
                    languages that I mentioned in "Technical Skills".</p>
                {this.state.projects.map((proj) => {
                    return (
                        <Project project={proj.project} img={proj.img} typeOfProject={proj.typeOfProject}
                                 text={proj.text} pl={proj.pl}/>
                    )
                })}
            </Container>
        );
    }

}

export default ProjectComponent;