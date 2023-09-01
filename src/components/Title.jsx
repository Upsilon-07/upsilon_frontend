import PropTypes from "prop-types";

function Title({ title }) {
  return (
    <>
      <h1 id={`${data.weight}`}>{`${data.title}`}</h1>
    </>

  );
}

Title.propTypes = {
    title: PropTypes.string.isRequired,
  };

export default Title;
