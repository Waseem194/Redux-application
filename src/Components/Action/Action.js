export const addSong = (song) => {
  return {
    type: "ADD_SONG",
    payload: song,
  };
};

export const deleteSong = (songId) => {
  return {
    type: "DELETE_SONG",
    payload: songId,
  };
};
export const editSong = (song) => {
  return {
    type: "EDIT_SONG",
    payload: song,
  };
};
