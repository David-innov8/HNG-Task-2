import bckImg from "../../Assets/BAckgroundImg.png";
import arrow from "../../Assets/arrow.svg";
import location from "../../Assets/location.svg";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar";
const Landing = () => {
  const styles = {
    backgroundImage: `url(${bckImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh", // Ensures the background covers the entire viewport height
    backgroundRepeat: "no-repeat",
  };
  const navigate = useNavigate();
  return (
    <div className="h-screen " style={styles}>
      <Navbar />

      <div className=" h-[80%] flex flex-col m-auto justify-center items-center">
        <div className="  mt-[-50px] flex flex-col justify-center items-center">
          <div className=" w-72 h-9 mb-4 opacity-30 bg-slate-600 flex  justify-between rounded-2xl items-center px-5 text-white">
            Input Location{" "}
            <span>
              <img src={location} />
            </span>
          </div>
          <h1 className="text-3xl text-center font-semibold">
            Know what the weather would look <br />
            like when you’re out
          </h1>
          <button
            onClick={() => navigate("/Login")}
            className="flex items-center my-4 text-white px-6 py-3 bg-[#3448FF] rounded-2xl"
          >
            Sign in to your account{" "}
            <span>
              <img className="h-4 ml-2" src={arrow} alt="sdf" />
            </span>
          </button>
          <p className="text-black font-semibold">
            New to Weather.me?{" "}
            <Link to="/SignUp">
              {" "}
              <span className="text-[#3448FF]">Join now</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Landing;
