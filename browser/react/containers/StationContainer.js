import { connect } from 'react-redux';
import Station from '../components/Station';
import { convertSong } from '../utils';
import { toggleSong } from '../action-creators/player';

const mapStateToProps = (state, ownProps) => {
  return {
    songs: state.songs.filter(song => song.genre === ownProps.params.station).map(convertSong),
    // convertSongsToStation(state.songs)[ownProps.params.station]
    genreName: ownProps.params.station,
    isPlaying: state.player.isPlaying,
    currentSong: state.player.currentSong,

    };
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleOne: (song, list) => dispatch(toggleSong(song, list)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Station);
