import * as yup from "yup";

const editProfileSchema = yup.object().shape({
  username: yup
    .string()
    .min(8, "Must be at least 4 characters")
    .max(20, "Must be less  than 20 characters"),
  email: yup.string().email("Invalid email address"),
  image: yup
    .mixed()
    .test(
      "fileType",
      "Invalid file format, please use JPEG, GIF, or PNG.",
      (value) => {
        // console.log(value);
        if (!value || value.length === 0) return true; // to skip the verification
        return ("image/jpeg", "image/png", "image/gif").includes(value[0].type);
      }
    )
    .test("fileSize", "File size is too large. Max size: 5MB", (value) => {
      if (!value || value.length === 0) return true; // to skip the verification
      return value[0].size <= 5 * 1024 * 1024; // 5MB
    }),
});

export default editProfileSchema;
