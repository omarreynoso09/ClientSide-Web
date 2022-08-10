import React from "react";
import { Row, Col, Icon } from "antd";
import { Link } from "react-router-dom";

import "./NavigationFooter.scss";

export default function NavigationFooter() {
  return (
    <Row className="navigation-footer">
      <Col>
        <h3>Navegation</h3>
      </Col>
      <Col md={12}>
        <RenderListLeft />
      </Col>
      <Col md={12}>
        <RenderListRight />
      </Col>
    </Row>
  );
}

function RenderListLeft() {
  return (
    <ul>
      <li>
        <a href="#">
          <Icon type="book" /> Courses
        </a>
      </li>
      <li>
        <a href="#">
          <Icon type="code" /> Side Hustle
        </a>
      </li>
      <li>
        <a href="#">
          <Icon type="database" /> Resources
        </a>
      </li>
      <li>
        <a href="#">
          <Icon type="right" /> Privacy Policy
        </a>
      </li>
    </ul>
  );
}

function RenderListRight() {
  return (
    <ul>
      <li>
        <a href="#">
          <Icon type="hdd" /> Resume
        </a>
      </li>
      <li>
        <a href="#">
          <Icon type="appstore" /> Themes
        </a>
      </li>
      <li>
        <a href="#">
          <Icon type="user" /> Porfolio
        </a>
      </li>
      <li>
        <a href="#">
          <Icon type="right" /> Terms
        </a>
      </li>
    </ul>
  );
}
