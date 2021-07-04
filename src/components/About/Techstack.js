import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPhp,
  DiGit,
} from "react-icons/di";
import {
  SiFirebase,
  SiCsharp,
  SiJquery,
  SiHtml5,
  SiSass,
  SiTypescript,
  SiBootstrap,
  SiCsswizardry,
} from "react-icons/si";
import { AiOutlineConsoleSql } from "react-icons/ai";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPhp />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCsharp />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJquery />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCsswizardry />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSass />
      </Col>{" "}
      <Col xs={4} md={2} className="tech-icons">
        <AiOutlineConsoleSql />
      </Col>{" "}
      <Col xs={4} md={2} className="tech-icons">
        <SiBootstrap />
      </Col>{" "}
      <Col xs={4} md={2} className="tech-icons">
        <SiTypescript />
      </Col>{" "}
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
      </Col>
    </Row>
  );
}

export default Techstack;
