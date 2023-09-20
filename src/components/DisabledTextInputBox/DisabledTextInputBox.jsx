import PropTypes from "prop-types";
import "./DisabledTextInputBox.css"

const DisabledTextInputBox = ({ type, value }) => {
  return (
    <div>
        <input
        className="text-input-class"
        type={type}
        value={value}
        readOnly={true}
        />
    </div>
  );
}

DisabledTextInputBox.propTypes = {
    type: PropTypes.string,
    value: PropTypes.string,
  };

export default DisabledTextInputBox
