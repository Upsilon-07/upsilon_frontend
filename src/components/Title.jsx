import PropTypes from "prop-types";

function Title({ data }) {
  return (
    <>
      <h1 id={`${data.weight}`}>{`${data.title}`}</h1>
    </>
  );
}

Title.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    weight: PropTypes.string.isRequired,
  }).isRequired,
};

export default Title;
