import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: "Gonçalo Lopes",
      headerLinks: [
        {title: 'Home', path: '/'},
        {title: 'Projects', path: '/projects'},
        {title: 'Contact', path: '/contact'}
      ],
      home: {
        title: '"Hello! Welcome to my Portfolio";'
      },
      projects: {
        title: "Projects"
      },
      contact: {
        title: "Contact me!"
      },
    }
  }

  render(){
    return (
        <Router>
          <Container fluid={true} className={"p-0"}>
            <Navbar className={"border-bottom m-1 font-weight-bold"} bg={"transparent"} expand={"lg"}>
              <Navbar.Brand>
                <Link to={"/"} className={"nav-link"}>Gonçalo Lopes</Link>
              </Navbar.Brand>
              <Navbar.Toggle className={"border-0"} aria-controls={"navbar-toggle"}/>
              <Navbar.Collapse id={"navbar-toggle"}>
                <Nav className={"ml-auto"}>
                  <Link to={"/"} className={"nav-link"}>Home</Link>
                  <Link to={"/projects"} className={"nav-link"}>Projects</Link>
                  <Link to={"/contact"} className={"nav-link"}>Contact</Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>

            <Route path={"/"} exact render={() => <HomePage title={this.state.home.title}/>}/>
            <Route path={"/projects"} render={() => <ProjectsPage title={this.state.projects.title}/>}/>
            <Route path={"/contact"} render={() => <ContactPage title={this.state.contact.title}/>}/>


            <Footer/>
          </Container>


        </Router>
    );
  }

}

export default App;