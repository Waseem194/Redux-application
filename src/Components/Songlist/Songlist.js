import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteSong } from "../Action/Action";
import { Table, Container, Col, Row } from 'react-bootstrap';
const Songlist = () => {
  const playlist = useSelector((state) => state.playlistReducer.songs);
  const dispatch = useDispatch();
  console.log(playlist);
  const handleRemoveSong = (songId) => {
    dispatch(deleteSong(songId));
  };

  return (
    <div>
      <Container fluid="md" >
        <Row>
          <Col md={3}>
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

export default Songlist;
