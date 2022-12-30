import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';


const ProfileModal = ({ data }) => {
  const { _id,name, email, university, address } = data;
  const { register, handleSubmit } = useForm();
  const [info, setInfo] = useState(data);

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";


  const handlePost = (data) => { 

fetch(`http://localhost:5000/update/${info._id}`, {
  method: "PUT",
  headers: {
    "content-type": "application/json",
  },
  body: JSON.stringify(info),
})
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    // toast("Product Successfully Added");

    navigate(from, { replace: true });
  });

  }


  return (
    <>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal bg-neutral">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <form action="" onSubmit={handleSubmit(handlePost)}>
            <input
              defaultValue={name}
              {...register("name", { required: true })}
              type="text"
              className="input input-bordered input-primary w-full max-w-xs mb-2"
            />{" "}
            <br></br>
            <input
              defaultValue={email}
              {...register("email", { required: true })}
              type="text"
              className="input input-bordered input-primary w-full max-w-xs mb-2"
            />{" "}
            <br></br>
            <input
              defaultValue={university}
              {...register("university", { required: true })}
              type="text"
              className="input input-bordered input-primary w-full max-w-xs mb-2"
            />{" "}
            <br></br>
            <input
              defaultValue={address}
              {...register("address", { required: true })}
              type="text"
              className="input input-bordered input-primary w-full max-w-xs mb-2 "
            />
            <br></br>
            <input
              className="btn btn-primary w-full max-w-xs mb-3"
              type="submit" value="Save"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default ProfileModal;