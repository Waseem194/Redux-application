import React, { useState, Fragment } from "react";
import { Table, Form, Container, Row, Col, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuid } from 'uuid';
import { addSong, deleteSong } from "./Components/Action/Action";
const AddSongList = () => {
  const playlist = useSelector((state) => state.playlistReducer.songs);

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
  const handleRemoveSong = (listData) => {
    dispatch(deleteSong(listData));
  };

  return (
    <div>
      <Container fluid="md">
        <Row>
          <Col md={4}>
            <h1>Add Song</h1>
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
          <Col md={8}>
            <h1>Music List</h1>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Song Name</th>
                  <th>Singer Name</th>
                  <th>id</th>
                </tr>
              </thead>
              <tbody>
                {playlist.map((songList, index) => {
                  return (
                    <Fragment>
                      <tr key={index}>
                        <td>{songList.song}</td>
                        <td>{songList.singer}</td>
                        <td>{songList.id}</td>
                        <Col>
                          <Button variant="primary">Edit</Button>{" "}
                          <Button onClick={() => handleRemoveSong(songList.id)} variant="secondary">Delete</Button>
                        </Col>
                      </tr>
                    </Fragment>
                  );
                })}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default AddSongList;
