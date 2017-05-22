import React, {Component} from 'react';
import Albums from '../components/Albums';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
    return {
      albums: state.albums.list
    };
  };

export default connect(mapStateToProps)(Albums);
