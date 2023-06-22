import { createStore, combineReducers } from "redux";
import data from "../data.json";

const initialState = {
  songs: data,
};

const playlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_SONG":
      return {
        ...state,
        songs: [...state.songs, action.payload],
      };
    case "EDIT_SONG":
      return {
        ...state,
        songs: [
          ...state.songs.map((song) => {
            if (action.payload.id === song.id) {
              return action.payload;
            }
            return song;
          }),
        ],
      };
    case "DELETE_SONG":
      return {
        ...state,
        songs: state.songs.filter((song) => song.id !== action.payload),
      };
    default:
      return state;
  }
};

let reducers = combineReducers({ playlistReducer });
export let myStore = createStore(reducers);
