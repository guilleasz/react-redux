import React, {Component} from 'react';
import AUDIO from '../audio';
import {connect} from 'react-redux';
import {previous, next, setProgress, toggleSong} from '../action-creators/player';
import Player from '../components/Player';


const mapStateToProps = (state) => {
  return Object.assign({},
  {
    player: state.player
  });
};

const mapDispatchToProps = (dispatch) => ({
  setProgress: (currentTime, duration) => dispatch(setProgress(currentTime, duration)),
  next: () => dispatch(next()),
  previous: () => dispatch(previous()),
  toggle: (song, list) => dispatch(toggleSong(song, list)),
});


class PlayerContainer extends Component {

  constructor(props){
    super(props);
    this.toggle = this.toggle.bind(this);
  }
  componentDidMount() {
    AUDIO.addEventListener('ended', this.props.next);
    AUDIO.addEventListener('timeupdate', () => {
      this.props.setProgress(AUDIO.currentTime / AUDIO.duration);
      //store.dispatch(setProgress(AUDIO.currentTime / AUDIO.duration));
    });
  }

  toggle() {
    this.props.toggle(this.props.player.currentSong, this.props.player.currentSongList);
  }

  render() {
    return <Player
      {...this.props.player}
      next={this.props.next}
      prev={this.props.previous}
      toggle={this.props.toggle}
    />;
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerContainer);
