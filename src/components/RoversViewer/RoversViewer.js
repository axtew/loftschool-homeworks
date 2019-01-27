import React, { Component } from 'react';
import { connect } from 'react-redux';

import styles from './RoversViewer.module.css';
import SelectSol from '../SelectSol';
import RoverPhotos from '../RoverPhotos';
import { changeSol, fetchPhotosRequest } from '../../modules/RoverPhotos';
import {
  getSelectedSol,
  getRoverPhotos
} from '../../modules/RoverPhotos/selectors';

const names = ['curiosity', 'opportunity', 'spirit'];

class RoversViewer extends Component {
  componentDidMount() {
    const { selectedSol, fetchPhotosRequest } = this.props;

    names.map(name => fetchPhotosRequest({ name: name, sol: selectedSol }));
  }

  handleChangeSol = solValue => {
    const { changeSol, allPhotos, fetchPhotosRequest } = this.props;

    changeSol(solValue);
    names.map(name => {
      if (allPhotos[name][solValue] === undefined) {
        fetchPhotosRequest({ name: name, sol: solValue });
      }
      return null;
    });
  };

  render() {
    const { minSol, maxSol, selectedSol, photos } = this.props;
    return (
      <div className={styles.root}>
        <SelectSol
          changeSol={this.handleChangeSol}
          minSol={minSol}
          maxSol={maxSol}
          selectedSol={selectedSol}
        />
        <div className={styles.container}>
          {photos.map(roverPhotos => {
            return (
              <RoverPhotos
                key={roverPhotos.name}
                name={roverPhotos.name}
                photos={roverPhotos.photos}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  minSol: state.roverPhotos.sol.min,
  maxSol: state.roverPhotos.sol.max,
  selectedSol: getSelectedSol(state),
  photos: getRoverPhotos(state),
  allPhotos: state.roverPhotos.photos
});

const mapDispatchToProps = { changeSol, fetchPhotosRequest };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RoversViewer);
