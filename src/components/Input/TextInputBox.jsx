/* eslint-disable react/prop-types */
import "./inputstyles.css";
function TextInputBox({ type, register, errors, placeholder }) {
  return (
    <div>
      <input
        className="text-input-class"
        placeholder={placeholder}
        type={type}
        {...register(placeholder, {
          required: `${placeholder} is required`,
        })}
        aria-invalid={errors[placeholder] ? "true" : "false"}
      />
      {errors[placeholder] && <p>{errors[placeholder]?.message}</p>}
    </div>
  );
}

export default TextInputBox;
