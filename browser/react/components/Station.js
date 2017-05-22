import React from 'react';
import {Link} from 'react-router';
import Songs from './Songs';

export default function Stations (props) {

  const DUMMY_GENRE_NAME = 'Jazz';
  const DUMMY_SONGS = [{
    id: 1,
    name: "A Love Supreme",
    genre: "Jazz",
    artists: [{ name: "John Coltrane" }]
  }];
  const DUMMY_CURRENT_SONG = {};
  const DUMMY_IS_PLAYING = false;
  const DUMMY_TOGGLE_ONE = function () {};

  return (
    <div>
      <h3>{`${props.params.station}`}</h3>
      <Songs
        songs={DUMMY_SONGS}
        currentSong={DUMMY_CURRENT_SONG}
        isPlaying={DUMMY_IS_PLAYING}
        toggleOne={DUMMY_TOGGLE_ONE}
      />
    </div>
  );
}
