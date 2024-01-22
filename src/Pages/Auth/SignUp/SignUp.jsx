import Navbar from "../../../Components/Navbar";
import bckImg from "../../../Assets/BAckgroundImg.png";

import { useFormik } from "formik";
import Google from "../../../Assets/Google.svg";
import { Link } from "react-router-dom";
const SignUp = () => {
  const styles = {
    backgroundImage: `url(${bckImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh", // Ensures the background covers the entire viewport height
    backgroundRepeat: "no-repeat",
  };
  const {
    values: { username, email, password },
    setFieldValue,
    handleChange,
    handleBlur,
    handleSubmit,
    // isValid,
    // errors,
    // touched,
  } = useFormik({
    initialValues: { username: "", email: "", password: "" },
    onSubmit: (values) => {
      //  mutation.mutate(values, {
      //    onSuccess: () => {
      //      navigate("/signup/verify-email", {
      //        state: {
      //          cohortSelection: values.cohort,
      //          email: values.email,
      //          phoneNumber: values.phone,
      //        },
      //      });
      //    },
      //  });
    },

    validateOnBlur: true,
    validateOnMount: true,
  });
  return (
    <div className="h-screen  bg-red-100" style={styles}>
      <div className="flex">
        <div className="h-full    w-2/5">
          <Navbar />{" "}
        </div>
        <div className="h-screen border rounded-2xl bg-white flex flex-col justify-center items-center bg-opacity-70 w-3/5">
          <div>
            <div className="mb-7 ">
              <h1 className="text-4xl font-semibold">Join Us</h1>
              <p className="font-medium">See How the weather is today </p>
            </div>
            <form>
              <div className="flex flex-col">
                <label className="font-semibold mb-1">User name</label>
                <input
                  id="username"
                  value={username}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  className="border px-2 border-black h-10 w-72 rounded-2xl"
                  type="text"
                />
              </div>
              <div className="flex flex-col my-2">
                <label className="font-semibold mb-1">Email</label>
                <input
                  id="email"
                  value={email}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  className="border px-2 border-black h-10 w-72 rounded-2xl"
                  type="email"
                />
              </div>
              <div className="flex flex-col">
                <label className="font-semibold mb-1">Password</label>
                <input
                  id="password"
                  value={password}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  className="border px-2 border-black h-10 w-72 rounded-2xl"
                  type="password"
                />
              </div>
              <button className="w-72 h-12 bg-[#3448FF] text-white rounded-2xl mt-5">
                Sign Up
              </button>
            </form>
            <button className="w-72 h-12 bg-[#464646] flex items-center justify-center text-white rounded-2xl mt-4">
              <span>
                <img className="h-6 mr-2" alt="sdkjf" src={Google} />
              </span>
              Sign Up with google
            </button>
            <p className="mt-3">
              Already have an account?{" "}
              <Link to="/Login">
                            <span className="text-[#3448FF]">Sign in </span>{" "}

              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
