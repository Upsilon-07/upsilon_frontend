import PropTypes from "prop-types";
function TextInputBox({ label, type, name, register, errors  }) {
  return (
    <div className="text-input">
        <input
        type={type}
        {...register(name, { required: `${label} is required` })}
        aria-invalid={errors[name] ? 'true' : 'false'}
      />
      {errors[name] && <p>{errors[name]?.message}</p>}
    </div>
  );
}

TextInputBox.propTypes = {
    type: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    register: PropTypes.func.isRequired,
    errors: PropTypes.string.isRequired,
  };

export default TextInputBox;
