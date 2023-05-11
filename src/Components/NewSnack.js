// import { Link } from "react-router-dom";

// function NewSnack() {

//   return (
//     <div>

//     </div>
//   );
// }

// export default NewSnack;


import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function NewSnack() {
  const navigate = useNavigate();

  const addSong = async (newSong) => {
    try {
      const response = await axios.post(`${API}/songs`, newSong);
      if (response.data) {
        console.log(response.data);
        navigate(`/songs`);
      } else {
        throw new Error("Error adding song");
      }
    } catch (error) {
      console.error(error);
      alert("Error adding song");
    }
  };


  const [song, setSong] = useState({
    "title": "",
    "artist": "",
    "album": "",
    "time": "",
    "genre": "",
    "is_favorite": false
  });

  const handleTextChange = (event) => {
    setSong({ ...song, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setSong({ ...song, is_favorite: !song.is_favorite });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addSong({
      "title": song.title,
      "artist": song.artist,
      "album": song.album,
      "time": song.time,
      "genre": song.genre,
      "is_favorite": song.is_favorite
    });
  };

  return (
    <div className="New">
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          id="title"
          value={song.title}
          type="text"
          onChange={handleTextChange}
          placeholder="Song Title"
          required
        />
        <label htmlFor="artist">Artist:</label>
        <input
          id="artist"
          type="text"
          required
          value={song.artist}
          placeholder="Artist Name"
          onChange={handleTextChange}
        />
        <label htmlFor="album">Album:</label>
        <input
          id="album"
          type="text"
          name="album"
          value={song.album}
          placeholder="Album Name"
          onChange={handleTextChange}
        />
        <label htmlFor="time">Time:</label>
        <input
          id="time"
          type="text"
          name="time"
          value={song.time}
          placeholder="Song Duration"
          onChange={handleTextChange}
        />
        <label htmlFor="genre">Genre:</label>
        <input
          id="genre"
          type="text"
          name="genre"
          value={song.genre}
          placeholder="Song Genre"
          onChange={handleTextChange}
        />
        <label htmlFor="is_favorite">Favorite:</label>
        <input
          id="is_favorite"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={song.is_favorite}
        />

        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default NewSnack;