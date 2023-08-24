import PropTypes from 'prop-types';

function JourneyDescription({ journeyData }) {
  return (
    <p>{`${journeyData.description}`}</p>
  );
}

JourneyDescription.propTypes = {
  journeyData: PropTypes.shape({
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default JourneyDescription;
