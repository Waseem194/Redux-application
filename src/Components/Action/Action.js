export const addSong=(song)=>{
    return{
type:"ADD_SONG",
payload: song
    }
}

export const deleteSong=(songId)=>{
    return{
type:"DELETE_SONG",
payload:songId
    }
}