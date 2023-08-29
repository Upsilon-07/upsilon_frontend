import PropTypes from "prop-types";
function TextInputBox({ data }) {
  return (
    <div className="text-input">
      <label>{data.label}</label>
      <input
        type={data.type}
        placeholder={data.placeholder}
        value={data.value}
        onChange={data.onChange}
      />
    </div>
  );
}

TextInputBox.propTypes = {
  data: PropTypes.shape({
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.string.isRequired,
  }).isRequired,
};

export default TextInputBox;
