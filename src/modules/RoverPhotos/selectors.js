export const getSelectedSol = state => state.roverPhotos.sol.current;

export const getRoverPhotos = state => {
  const { photos } = state.roverPhotos;
  return Object.keys(photos).reduce((previousValue, currentValue) => {
    previousValue.push({
      name: currentValue,
      photos:
        photos[currentValue][getSelectedSol(state)] &&
        photos[currentValue][getSelectedSol(state)].photos
          ? photos[currentValue][getSelectedSol(state)].photos
          : []
    });

    return previousValue;
  }, []);
};
