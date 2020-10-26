import React from "react";
import Header from "../components/Header";
import HomePageContent from "../components/HomePageContent";



function HomePage(props) {

    return (
        <div>
            <Header title={props.title}/>
            <HomePageContent/>
        </div>
    );
}

export default HomePage;