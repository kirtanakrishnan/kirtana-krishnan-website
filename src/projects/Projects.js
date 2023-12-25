import react from "react";
import "./projects.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faVideo } from '@fortawesome/free-solid-svg-icons';


function Projects() {
    
    return (
        <div className="projects">

            <div className="title">
                My Projects
            </div>
            <Container >
                <Row className="columns-container">
                    <Col className="column ">
                        <h3>
                        Movie Magic
                        </h3>

                        <p>
                        A movie library website that allows you to search for and like your favorite movies, as well as connect with other like-minded members.
                        </p>
                      
                        <a href="https://github.com/arunimag23/web-dev-project" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} style={{color: "#d37bac"}} size="xl" className="github" />
                        </a>
                        
                        {/* <a href="https://vermillion-tiramisu-9b102b.netlify.app/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faVideo} style={{color: "#d37bac"}} size="xl" className="netlify"/>
                        </a> */}

                        <h3>
                        Pacman
                        </h3>

                        <p>
                        A self-learning pacman game that uses fundamental AI concepts, from search to reinforcement learning.
                        </p>
                      
                        <a href="https://github.com/kirtanakrishnan/pacman" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} style={{color: "#d37bac"}} size="xl" className="github" />
                        </a>

                        <h3>
                        Fast to Forever
                        </h3>

                        <p>
                        Provides sustainable store options to fast fashion shoppers based on their current clothing and shopping style.
                        </p>
                      
                        <a href="https://github.com/kirtanakrishnan/fast-to-forever" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} style={{color: "#d37bac"}} size="xl" className="github" />
                        </a>

                        <h3>
                        Restaurant Recommender
                        </h3>

                        <p>
                        A quiz website which recommends users a restaurant in Boston that best matches their answer choices.
                        </p>
                      
                        <a href="https://github.com/kirtanakrishnan/restaurant-recommender" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} style={{color: "#d37bac"}} size="xl" className="github" />
                        </a>

                        <h3>
                        Marble Solitaire
                        </h3>

                        <p>
                        An implementation of the game, 'marble solitaire', in Java using object oriented design principles.
                        </p>
                      
                        <a href="https://github.com/kirtanakrishnan/marblesolitaire" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} style={{color: "#d37bac"}} size="xl" className="github" />
                        </a>
                        
                        
                    </Col>
                    <Col className="column">
                        <h3>
                         Sound Soulmates
                        </h3>
                        <p>
                        An android app that connects people by displaying what music user is currently listening to at a random point in the day to their friends.
                        </p>
                      
                        <a href="https://github.com/kirtanakrishnan/NU_MAD_SP2023_Final_Project_6" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} style={{color: "#d37bac"}} size="xl" className="github" />
                        </a>

                        <h3>
                        JPAL
                        </h3>

                        <p>
                        Generates a personalized letter of recommendation for students in the New York City Department of Youth and Community Development program. Created as part of Code4Community.
                        </p>
                      
                        <a href="https://github.com/Code-4-Community/jpal-frontend" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} style={{color: "#d37bac"}} size="xl" className="github" />
                        </a>

                        <h3>
                        Top Songs Analyzer
                        </h3>

                        <p>
                        Determines what aspects lead to a song's popularity using Kaggle dataset and random forest regressor.
                        </p>
                      
                        <a href="https://github.com/kirtanakrishnan/top-songs-analyzer" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} style={{color: "#d37bac"}} size="xl" className="github" />
                        </a>
                        <h3>
                        Kanbas
                        </h3>

                        <p>
                        Replicates various aspects of the 'Canvas' application such as module and assignment viewing and editing.
                        </p>
                      
                        <a href="https://github.com/kirtanakrishnan/kanbas-react-web-app" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} style={{color: "#d37bac"}} size="xl" className="github" />
                        </a>

                        <h3>
                        Photoshop
                        </h3>

                        <p>
                        An application that allows you to upload an image and edit its various aspects, such as brightness, intensity, and filters.
                        </p>
                      
                        <a href="https://github.com/kirtanakrishnan/photoshop" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} style={{color: "#d37bac"}} size="xl" className="github" />
                        </a>
                    </Col>
                </Row>
            </Container>

            <div className="background-circle"></div>


            <div className="outer">
            <div className="background-circle2"></div>

            </div>
            
        </div>
      
    );
  }
  
  export default Projects;