import React, {Component} from 'react';
import { connect } from 'react-redux';

import Lyrics from '../components/Lyrics';
import {searchLyrics} from '../action-creators/lyrics';


const mapStateToProps = (state, ownProps) => {
  return Object.assign({}, ownProps, {
    lyrics: state.lyrics
  });
};

const mapDispatchToProps = (dispatch) => ({
  searchLyrics: (artistQuery, songQuery) => dispatch(searchLyrics(artistQuery, songQuery)),
});


class LyricsContainer extends Component {

  constructor() {
    super();
    this.state = {
      artistQuery: '',
      songQuery: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleArtistInput = this.handleArtistInput.bind(this);
    this.handleSongInput = this.handleSongInput.bind(this);
  }

  handleArtistInput(artist) {
    this.setState({ artistQuery: artist });
  }

  handleSongInput(song) {
    this.setState({ songQuery: song });
  }


handleSubmit(e) {
    e.preventDefault();
    if (this.state.artistQuery && this.state.songQuery) {
      this.props.searchLyrics(this.state.artistQuery, this.state.songQuery);
    }
  }

  render() {
    return (
      <Lyrics
        {...this.state}
        lyrics={this.props.lyrics}
        setArtist={this.handleArtistInput}
        setSong={this.handleSongInput}
        handleSubmit={this.handleSubmit} />
    );
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(LyricsContainer);
