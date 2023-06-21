import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import AddSongForm from "./AddSongForm";
import Songlist from "./Songlist";

function SongPage() {
  return (
    <Container>
      <Row>
        <Col md={9}>
          <Songlist />
        </Col>
        <Col md={3}>
          <AddSongForm />
        </Col>
      </Row>
    </Container>
  );
}

export default SongPage;
