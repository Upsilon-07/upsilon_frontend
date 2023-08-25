import PropTypes from 'prop-types';

function Image({ data }) {
  return (
    <img src={data.image} />
  );
}

Image.propTypes = {
  data: PropTypes.shape({
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default Image;
