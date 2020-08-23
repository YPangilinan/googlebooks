import React from "react";
import Thumbnail from "../Thumbnail";
import { Container, Row, Col } from "../Grid";
import "./style.css";

export function BookListItem(props) {
  return (
    <li className="list-group-item" style = {{marginTop: 20, padding: 20}}>
      <Container>
        <Row>
          <Col size="xs-4 lg-3">
            <Thumbnail src={props.thumbnail} />
          </Col>
          <Col size="xs-8 lg-9">
            <h3>{props.title}</h3>
            <h5>{props.author}</h5>
            <p>{props.description}</p>
            <button variant="contained"className="btn"><a id="btn" rel="noreferrer noopener" target="_blank" href={props.href}>
              View Book
            </a></button>
            <button variant="contained" className="btn" id="btn" onClick={props.handleSavedBook}>Save Book</button>
          </Col>
        </Row>
      </Container>
    </li>
  );
}