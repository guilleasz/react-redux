import {connect} from 'react-redux';
import Stations from '../components/Stations';
import {convertSongsToStations} from '../utils';

const mapStateToProps = (state) => {
  return { stations: convertSongsToStations(state.songs) };
}

const mapDispatchToProps = (dispatch) => {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Stations);
