import PropTypes from "prop-types";
function TextInputBox({ label, type, name, register, errors  }) {
  return (
    <div className="text-input">
        <input
        className="text-input-class"
        type={type}
        {...register(name, { required: `${label} is required` })}
        aria-invalid={errors.name ? 'true' : 'false'}
      />
      {errors.name && <p>{errors.name?.message}</p>}
    </div>
  );
}

TextInputBox.propTypes = {
    type: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string,
    register: PropTypes.func,
    errors: PropTypes.shape({
      name: PropTypes.string,
    })
  };

export default TextInputBox;
