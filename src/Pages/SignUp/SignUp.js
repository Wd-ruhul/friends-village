import { updateCurrentUser } from "firebase/auth";
import React, { useContext } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from '../../Context/AuthProvider';


const SignUp = () => {

  const { createUser, updateUser } = useContext(AuthContext);

  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handleSignUp = (data) => {
    console.log("data", data);
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;

        console.log(user);

        const userInfo = {
          displayName: data.name,
        };
        updateUser(userInfo)
          .then(() => { })
        .catch((error)=>{console.log(error)})

      })

      .catch((error) => console.log(error));
  };

  return (
    <section className="p-5" >
      <div className="flex justify-center">
        <div className="w-96">
          <h2 className="text-primary text-2xl mb-5">Sign Up</h2>

          <form onSubmit={handleSubmit(handleSignUp)}>
            <input
              {...register("name", { required: true })}
              placeholder="Enter Name"
              className="input input-bordered input-primary w-full  mb-5"
            />

            <input
              {...register("email", { required: true })}
              placeholder="Enter Email"
              className="input input-bordered input-primary w-full  mb-5"
            />
            <input
              {...register("password", { required: true })}
              placeholder="Enter Password"
              className="input input-bordered input-primary w-full  mb-5"
            />
          
            <input className="btn btn-primary w-full mb-5" type="submit" />
          </form>

          <p>
            Already have an account ?{" "}
            <Link className="text-primary" to="/login">
              please Sign In
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
