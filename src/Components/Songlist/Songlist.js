import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteSong } from "../Action/Action";

const Songlist = () => {
  const playlist = useSelector((state) => state.playlistReducer.songs);
  const dispatch = useDispatch();
  console.log(playlist);
  const handleRemoveSong = (songId) => {
    dispatch(deleteSong(songId));
  };

  return (
    <div>
      <table>
        <tbody>
          {playlist.map((songList, index) => {
            return (
              <Fragment>
                <tr key={index}>
                  <th>Song Name:</th>
                </tr>
                <tr>
                  <td>{songList.song}</td>
                </tr>
                <tr>
                  <th>Singer Name:</th>
                </tr>
                <tr>
                  <td>{songList.singer}</td>
                </tr>
                <th>id:</th>
                <tr>{songList.id}</tr>
              </Fragment>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Songlist;
