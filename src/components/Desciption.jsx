import PropTypes from 'prop-types';

function Description({ data }) {
  return (
    <p>{`${data.description}`}</p>
  );
}

Description.propTypes = {
  data: PropTypes.shape({
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default Description;
