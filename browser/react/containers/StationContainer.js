import {connect} from 'react-redux';
import Station from '../components/Station';
import {convertSongsToStations} from '../utils';
import {toggleSong} from '../action-creators/player';

const mapStateToProps = (state, ownProps) => {
  return {
    songs: convertSongsToStations(state.songs)[ownProps.params.station],
    genreName: ownProps.params.station,
    isPlaying: state.player.isPlaying,
    currentSong: state.player.currentSong

    };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    toggleOne: (song, list) => dispatch(toggleSong(song, list))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Station);
