import * as yup from "yup";

const passwordSchema = yup.object().shape({
  password: yup
    .string()
    .required("Current password is required")
    .min(8, "Password must have at least 8 characters")
    .matches(
      /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&'])[A-Za-z\d@$!%*?&']+$/,
      "Password must contain at least 1 uppercase letter, at least 1 number and at least 1 special character. "
    ),
  newPassword: yup
    .string()
    .required("A new password is required")
    .min(8, "Password must have at least 8 characters")
    .matches(
      /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&'])[A-Za-z\d@$!%*?&']+$/,
      "Password must contain at least 1 uppercase letter, at least 1 number and at least 1 special character. "
    ),
  repeatPassword: yup
    .string()
    .required("Repeat password is required")
    .min(8, "Password must have at least 8 characters")
    .matches(
      /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&'])[A-Za-z\d@$!%*?&']+$/,
      "Password must contain at least 1 uppercase letter, at least 1 number and at least 1 special character. "
    ),
});

export default passwordSchema;
