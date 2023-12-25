import './home.css';
import React from "react";
import myImage from "../images/IMG_1280.jpg";

function Home () {

    return (
<div className="home">
    

    <div className="row background-bubble">

     
     <div className="col-12 col-hello ">

<div className="pic">
<img className="homepic " src={myImage} />
</div>
     
     <div>
     <p className="hello">
         Hello, my name is Kirtana.
        
     </p>
     <p className="hello-sub">
     Welcome to my website! Here, you’ll learn a little bit more about me, my projects, and what I love to do.

     </p>
     </div>
     
     </div>
    </div>
</div>
    );
}

export default Home;