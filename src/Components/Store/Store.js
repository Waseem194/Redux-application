
import { createStore, combineReducers } from 'redux';



const initialState = {
    songs: [
    
    ],
};

const playlistReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_SONG':
            return {
                ...state,
                songs: [...state.songs, action.payload],
            };
        case 'DELETE_SONG':
            return {
                ...state,
                songs: state.songs.filter((song) => song.id !== action.payload),
            };
        default:
            return state;
    }
};

let data = combineReducers({ playlistReducer });
export  let myStore = createStore(data);



