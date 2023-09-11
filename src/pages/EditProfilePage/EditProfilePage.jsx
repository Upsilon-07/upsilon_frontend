import "./EditProfilePage.css";
import { useContext, useState } from "react";
import UserContext from "../../contexts/UserContext";
import Navbar from "../../components/navbar/Navbar";
import NavbarDesktop from "../../components/NavbarDesktop/NavbarDesktop";
import { Link } from "react-router-dom";
import ArrowButton from "../../components/ArrowButton/ArrowButton";
import Title from "../../components/Title";
import TextInputBox from "../../components/TextInputBox";
import NextButton from "../../components/next-page-button/NextButton";
import { useForm } from "react-hook-form";
import api from "../../api/api";

// import { yupResolver } from "@hookform/resolvers/yup";
// import editProfileSchema from "../../schemas/profile-schema";

import { storage } from "../../services/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 as uuid } from "uuid";

const EditProfilePage = () => {
  const { user, setUser } = useContext(UserContext);

  const [url, setUrl] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  //   {
  //   resolver: yupResolver(editProfileSchema),
  // }

  const editProfileInfo = (data) => {
    delete data.image;
    if (data.picture[0]) {
      const profileImage = data.picture[0];

      const imageRef = ref(storage, `${uuid()}-profile-picture-${user.id}`);

      // console.log(profileImage);
      // console.log(imageRef);

      uploadBytes(imageRef, profileImage)
        .then(() => {
          getDownloadURL(imageRef)
            .then((downloadImageURL) => {
              setUrl(downloadImageURL);
              // console.log(downloadImageURL);
            })
            .catch((error) => console.error(error));
        })
        .catch((error) => console.error(error));
    } else {
      delete data.picture;

      // // console.log(data);
    }

    // console.log(data);
    // console.log(data.url);

    const new_data = { ...data, picture: [url] };

    console.log(new_data);

    api
      .put(`/user/${user.id}`, new_data)
      .then((response) => {
        if (response.status === 200) {
          alert("User updated");
        }
      })
      .catch((error) => console.error(error));
    setUser((prevUser) => ({ ...prevUser, ...new_data }));
  };

  return (
    <div className="edit-profile-page">
      <NavbarDesktop />
      <div className="edit-profile-page-return-button">
        <Link to="/user-profile">
          <ArrowButton />
        </Link>
      </div>
      <div className="edit-profile-title">
          <Title title="Edit Profile" weight={"light-title"}/>
      </div>
      <div>
        <form onSubmit={handleSubmit(editProfileInfo)} className="edit-profile-form">
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
      <Navbar />
    </div>
  );
};

export default EditProfilePage;
