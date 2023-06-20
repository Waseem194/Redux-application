import React, { useState } from "react";
import { Form, Container, Row, Col, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { v4 as uuid } from 'uuid';
import { addSong } from "./Components/Action/Action";
const AddSongList = () => {
  const dispatch = useDispatch();
  const [validate, setValidate] = useState(false);
  const [songName, setSongName] = useState();
  const [singerName, setSingerName] = useState();
 
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    const valid = form.checkValidity();
    const listData = {
      id: uuid(),
      song: songName,
      singer: singerName,
    };
    dispatch(addSong(listData));
  };

  return (
    <div>
      <Container>
        <Row>
          <Col md={3}>
            <Form noValidate validated={validate} onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Song Name</Form.Label>
                <Form.Control
                  onChange={(event) => setSongName(event.target.value)}
                  type="text"
                  placeholder="Enter Song"
                />
                <Form.Group className="mb-3" controlId="formGroupPassword">
                  <Form.Label>Singer Name</Form.Label>
                  <Form.Control
                    onChange={(event) => setSingerName(event.target.value)}
                    type="text"
                    placeholder="Enter Singer Name"
                  />
                </Form.Group>
              </Form.Group>
              <Button variant="success" type="submit">
                Add
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default AddSongList;
