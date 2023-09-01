import PropTypes from 'prop-types';

function Title({ title,weight }) {
  return (
    <>
    <h1 id={`${weight}`}>{`${title}`}</h1>
    </>

  );
}

Title.propTypes = {
    title: PropTypes.string.isRequired,
    weight: PropTypes.string.isRequired,
  };

export default Title;
