import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddSongList from './AddSongList';
import Songlist from './Components/Songlist/Songlist';
import './App.css';

function App() {
  return (
    <div>
      <h1>Music List</h1>
<Songlist/>
<AddSongList/>
    </div>
  );
}

export default App;
