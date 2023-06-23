import React, { useState } from "react";
import { Form, Container, Row, Col, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuid } from "uuid";
import { addSong } from "./Action";




const AddSongForm = () => {
  const playlist = useSelector((state) => state.playlistReducer.songs);

  const dispatch = useDispatch();
  const [validate, setValidate] = useState(false);
  const [songName, setSongName] = useState("");
  const [singerName, setSingerName] = useState("");

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
     form.checkValidity();
    const listData = {
      id: uuid(),
      song: songName,
      singer: singerName,
    };
    dispatch(addSong(listData));
    resetForm();
  };
  const resetForm = () => {
    setSongName("");
    setSingerName("");
  };
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h1>Add Song</h1>
            <Form noValidate validated={validate} onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Song Name</Form.Label>
                <Form.Control
                  value={songName}
                  onChange={(event) => setSongName(event.target.value)}
                  type="text"
                  placeholder="Enter Song"
                />
                <Form.Group className="mb-3" controlId="formGroupPassword">
                  <Form.Label>Singer Name</Form.Label>
                  <Form.Control
                    value={singerName}
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
export default AddSongForm;
