import React, { useContext } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
const Login = () => {

  const { user, logIn, loginWithGoogle } = useContext(AuthContext);

  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handleSignIn = (data) => {
    console.log("data", data);
    logIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        // toast("Successfully Sing In ");
        console.log(user);
        navigate(from, { replace: true });
      })

      .catch((error) => console.log(error));
  };
  const handleGoogleSignIn = () => {
    loginWithGoogle()
      .then((result) => {
        const user = result.user;
        console.log("🚀 ~ file: Login.js ~ line 36 ~ .then ~ user", user);
        // saveUser(user.displayName, user.email);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <section className="p-5" >
      <div className="flex justify-center">
        <div className="w-96">
          <h2 className="text-primary text-2xl mb-5">Sing In</h2>

          <form onSubmit={handleSubmit(handleSignIn)}>
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
          <div className="divider">OR</div>
          <button
            onClick={handleGoogleSignIn}
            className="w-full btn btn-outline"
          >
            Contuine With Google
          </button>
          <p className="mt-5">
            Did not have an account ?{" "}
            <Link className="text-primary" to="/signup">
              please Sign Up
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
