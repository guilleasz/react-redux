//import React from 'react';
import { connect } from 'react-redux';
import Sidebar from '../components/Sidebar';


const mapStateToProps = (state) => {
  return Object.assign({}, {
    playlists: state.playlists.list
  });
};

export default connect(mapStateToProps)(Sidebar);
