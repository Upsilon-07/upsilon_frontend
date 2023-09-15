import "./EditProfilePage.css";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext";

import { Link, useNavigate } from "react-router-dom";
import ArrowButton from "../../components/ArrowButton/ArrowButton";
import Title from "../../components/Title";
import TextInputBox from "../../components/TextInputBox";
import NextButton from "../../components/next-page-button/NextButton";
import { useForm } from "react-hook-form";
import api from "../../api/api";
import Cookies from 'js-cookie';

// import { yupResolver } from "@hookform/resolvers/yup";
// import editProfileSchema from "../../schemas/profile-schema";

import { storage } from "../../services/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 as uuid } from "uuid";

const EditProfilePage = () => {
  const { user, setUser } = useContext(UserContext);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  //   {
  //   resolver: yupResolver(editProfileSchema),
  // }

  const editProfileInfo = (data) => {
    const token = Cookies.get("user_token");
    if (token) {
      let config = {
        headers: {
          Authorization: "Bearer " + token,
        },
      };

    if (data.username === "") {
      data.username = user.username;
    }

    if (data.email === "") {
      data.email = user.email;
    }

    if (data.picture[0]) {
      const profileImage = data.picture[0];

      const imageRef = ref(storage, `${uuid()}-profile-picture-${user.id}`);

      // console.log(profileImage);
      // console.log(imageRef);

      // console.log(data);

      uploadBytes(imageRef, profileImage)
        .then(() => {
          getDownloadURL(imageRef)
            .then((downloadImageURL) => {
   
              data.picture = downloadImageURL;
              // console.log(data);
              api
                .put(`/user/${user.id}`, data, config)
                .then((response) => {
                  if (response.status === 200) {
                    // alert("User updated");
                    setUser((prevUser) => ({ ...prevUser, ...data }));
                    navigate("/user-profile");
                  }
                })
                .catch((error) => console.error(error));

            })
            .catch((error) => console.error(error));
        })
        .catch((error) => console.error(error));
    } else {
      if(user.picture && user.picture.length > 0){
        data.picture = user.picture;
      } else {
        data.picture = ""
      }

      // console.log(data);
      api
        .put(`/user/${user.id}`, data, config)
        .then((response) => {
          if (response.status === 200) {
            // alert("User updated");
            setUser((prevUser) => ({ ...prevUser, ...data }));
            navigate("/user-profile");

          }
        })
        .catch((error) => console.error(error));

      // // console.log(data);
    }
  } else {
    console.error("NO TOKEN FOUND");
  }
  };

  return (
    <div className="edit-profile-page">
      <div className="edit-profile-page-return-button">
        <Link to="/user-profile">
          <ArrowButton />
        </Link>
      </div>
      <div className="edit-profile-title">
        <Title title="Edit Profile" weight={"light-title"} />
      </div>
      <div>
        <form
          onSubmit={handleSubmit(editProfileInfo)}
          className="edit-profile-form"
        >
          <div>
            <TextInputBox
              label="Username"
              type="text"
              name="username"
              register={register}
              errors={errors}
              placeholder={user.username ? user.username : null}
            />
          </div>
          <div>
            <TextInputBox
              label="Email"
              type="email"
              name="email"
              register={register}
              errors={errors}
              placeholder={user.email ? user.email : null}
            />
          </div>
          <div>
            <label>Upload a Profile Image</label>
            <TextInputBox
              label="Picture"
              type="file"
              name="picture"
              register={register}
              errors={errors}
            />
          </div>
          <div className="save-changes-button">
            <NextButton
              buttonId="orange-button"
              buttonContent="SAVE CHANGES"
              buttonClass="button-square"
            />
          </div>
        </form>
        {/* <form onSubmit={handleSubmit(editProfileInfo)}>
          <div>
            <label>Profile Picture:</label>
            <br />
            <input type="file" {...register("image")} />
            {errors.image && <p>{errors.image?.message}</p>}
            <br />
            <label>Email:</label>
            <br />

            <input
              placeholder="email"
              type="email"
              {...register("email")}
              aria-invalid={errors.email ? "true" : "false"}
            />
            {errors.email && <p>{errors.email?.message}</p>}
            <br />
            <button type="submit">Save Changes</button>
          </div>
        </form> */}

        <div className="cancel-changes-button">
          <Link to="/user-profile">
            <NextButton
              buttonId="white-button"
              buttonContent="CANCEL CHANGES"
              buttonClass="button-square"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EditProfilePage;
