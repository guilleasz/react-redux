import React, {Component} from 'react';
import { connect } from 'react-redux';

import Artist from '../components/Artist';
import {toggleSong} from '../action-creators/player';


const mapStateToProps = (state, ownProps) => {
  return Object.assign({},
    {
    selectedArtist: state.artists.selected,
    children: ownProps.children
    },
    state.player
  );
};


const mapDispatchToProps = dispatch => ({
  toggleOne: (song, list) => dispatch(toggleSong(song, list)),
});


export default connect(mapStateToProps, mapDispatchToProps)(Artist);
