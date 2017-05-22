import { connect } from 'react-redux';

import Playlist from '../components/Playlist';
import { toggleSong } from '../action-creators/player';


const mapStateToProps = state => Object.assign({}, state.player, {
  selectedPlaylist: state.playlists.selected,
});
const mapDispatchToProps = dispatch => ({
  toggleOne: (song, list) => dispatch(toggleSong(song, list)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Playlist);
