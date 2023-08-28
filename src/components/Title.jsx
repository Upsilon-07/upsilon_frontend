import PropTypes from 'prop-types';

function Title({ data }) {
  return (
    <>
    <h1 id='light-title'>{`${data.title}`}</h1>
    <h1 id='bold-title'>{`${data.titlebold}`}</h1>
    </>

  );
}

Title.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    titlebold: PropTypes.string.isRequired,
  }).isRequired,
};

export default Title;
