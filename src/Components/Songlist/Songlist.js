import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteSong } from '../Action/Action';

const Songlist = () => {
  const playlist = useSelector((state) => state.playlistReducer.songs);
  const dispatch = useDispatch();

  const handleRemoveSong = (songId) => {
    dispatch(deleteSong(songId));
  };

  return (
    <div>
      <h2>Playlist</h2>
      {playlist.length === 0 ? (
        <p>No songs in the playlist</p>
      ) : (
        <ul>
          {playlist.map((song) => (
            <li key={song.id}>
              {song.title} - {song.artist}
              <button onClick={() => handleRemoveSong(song.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Songlist;

