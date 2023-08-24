import PropTypes from 'prop-types';

function JourneyTitle({ journeyData }) {
  return (
    <h1>{`${journeyData.title}`}</h1>
  );
}

JourneyTitle.propTypes = {
  journeyData: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default JourneyTitle;
