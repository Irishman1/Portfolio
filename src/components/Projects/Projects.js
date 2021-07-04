import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import store from "../../Assets/Projects/store.png";
import weather from "../../Assets/Projects/weather.png";
import game from "../../Assets/Projects/game.png";
import gallery from "../../Assets/Projects/gallery.png";
import engverse from "../../Assets/Projects/engverse.png";
import editor from "../../Assets/Projects/codeEditor.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              link_code="https://github.com/Irishman1/Editor"
              link="https://editor-irishman1.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={engverse}
              isBlog={false}
              title="Engverse"
              description="Software system to support the study of foreign languages through various methods of analysis and absorption
              information. Starting with simply memorizing words using the repetition distribution technique.
              The purpose of the development is to create a software system that provides effective and comfortable learning of English. The system consists of a server part and a web application. Development methods are based on Node.js for the server part, storage and interaction with data
              through a database, React.js for Web application development."
              link_code="https://github.com/Irishman1/Engverse"
              link="https://project-chi-five.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gallery}
              isBlog={false}
              title="Photo Gallery"
              description="Applications for loading and saving photos for a long time."
              link_code="https://github.com/Irishman1/Photo-Gallery"
              link="https://photo-gallery-seven.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={game}
              isBlog={false}
              title="3D Game"
              description="3D maze, where the player needs to find keys and coins to complete the level. Made in pure Javascript."
              link_code="https://github.com/Irishman1/3D-labyrinth"
              link="https://irishman1.github.io/3D-labyrinth/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Weather app"
              description="Application that determines the weather forecast for the week by location"
              link_code="https://github.com/Irishman1/Weather-app"
              link="https://irishman1.github.io/Weather-app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={store}
              isBlog={false}
              title="Store"
              description="A store with various products where you can order, buy and arrange delivery."
              link_code="https://github.com/Irishman1/store"
              link="https://node-react-ecommerce-app.herokuapp.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
