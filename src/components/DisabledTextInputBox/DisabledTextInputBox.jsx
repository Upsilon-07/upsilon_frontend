import PropTypes from "prop-types";
import "./DisabledTextInputBox.css"

const DisabledTextInputBox = ({ type, value }) => {
  return (
    <div className='disabled-text-input-box'>
        <input
        className="text-disabled-text-input-box"
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
