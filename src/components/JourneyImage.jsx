import PropTypes from 'prop-types';

function JourneyImage({ journeyData }) {
  return (
    <img src={journeyData.image} />
  );
}

JourneyImage.propTypes = {
  journeyData: PropTypes.shape({
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default JourneyImage;
