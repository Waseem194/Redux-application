import React, { Fragment, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteSong, editSong } from "./Action";
import { Table, Container, Col, Row, Button } from "react-bootstrap";



const UpdateSong=()=>{
    const [editing, setEditing] = useState(false);
    const [songData, setSongData] = useState();
    const [singerData, setSingerData] = useState();
    const playlist = useSelector((state) => state.playlistReducer.songs);
    const dispatch = useDispatch();
    const handleRemoveSong = (listData) => {
      dispatch(deleteSong(listData));
    };
  
    const toggleEditing = (songList) => {
      setSongData(songList.song);
      setSingerData(songList.singer);
      setEditing(!editing);
    };
  
    const updateEditing = (id) => {
      const data = {
        id,
        song: songData,
        singer: singerData,
      };
      dispatch(editSong(data));
      setEditing(!editing);
    };
    return(
        <div>
            <h1>Music List</h1>
      <Container>
        <Row>
          <Col>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>id</th>
                  <th>Singer Name</th>
                  <th>Song Name</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {playlist.map((songList, index) => {
                  return (
                    <Fragment key={index}>
                      <tr>
                        <td>{songList.id}</td>
                        <td>
                          {editing ? (
                            <input
                              value={singerData}
                              onChange={(e) => setSingerData(e.target.value)}
                            />
                          ) : (
                            songList.singer
                          )}
                        </td>
                        <td>
                          {editing ? (
                            <input
                              value={songData}
                              onChange={(e) => setSongData(e.target.value)}
                            />
                          ) : (
                            songList.song
                          )}
                        </td>
                        <td>
                          {editing ? (
                            <Fragment>
                              <Button
                                variant="primary"
                                onClick={() => updateEditing(songList.id)}
                              >
                                Update
                              </Button>
                              <Button
                                onClick={() => handleRemoveSong(songList.id)}
                                variant="secondary"
                              >
                                Cancel
                              </Button>
                            </Fragment>
                          ) : (
                            <Fragment>
                              <Button
                                variant="primary"
                                onClick={() => toggleEditing(songList)}
                              >
                                Edit
                              </Button>
                              <Button
                                onClick={() => handleRemoveSong(songList.id)}
                                variant="secondary"
                              >
                                Delete
                              </Button>
                            </Fragment>
                          )}
                        </td>
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
    )
}
export default UpdateSong;