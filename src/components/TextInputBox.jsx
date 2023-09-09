import PropTypes from "prop-types";
function TextInputBox({ label, type, name, register, errors, placeholder }) {
  return (
    <div className="text-input">
      <input
        className="text-input-class"
        type={type}
        placeholder={placeholder}
        {...register(name)}
        aria-invalid={errors.name ? "true" : "false"}
      />
      {errors.name && <p>{errors.name?.message}</p>}
    </div>
  );
}

TextInputBox.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  register: PropTypes.func,
  errors: PropTypes.shape({
    name: PropTypes.string,
  }),
};

export default TextInputBox;
