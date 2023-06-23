import React, { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteSong, editSong } from "./Action";
import { Button } from "react-bootstrap";
const UpdateSong = ({ songList, index }) => {
  const [editing, setEditing] = useState(false);
  const [songData, setSongData] = useState();
  const [singerData, setSingerData] = useState();

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
  const handleCancel = () => {
    setEditing(false);
  };
  return (
    <Fragment>
      <tr>
        <td>{index + 1}</td>
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
              </Button>{" "}
              <Button
                onClick={() => handleCancel(songList)}
                variant="secondary"
              >
                Cancel
              </Button>
            </Fragment>
          ) : (
            <Fragment>
              <Button variant="primary" onClick={() => toggleEditing(songList)}>
                Edit
              </Button>{" "}
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
};
export default UpdateSong;
