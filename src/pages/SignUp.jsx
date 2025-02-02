import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signUpUser } from "../services/userCRUD";

import UnHingedCrossGrid from '../LandingPage/components/ui/UnHingedCrossGrid';

function SignUp() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const userData = {
      username,
      email,
      password,
    };

    const result = await signUpUser(userData);

    if (result.success) {
      setMessage(result.message);
      navigate("/Login");
    } else {
      setMessage(result.message);
    }
  };

  return (
    <>
      <div className="fixed inset-0 z-10"> 
        <UnHingedCrossGrid
        theme={true}
        gridCount={80}
        gapSize={40}
      />
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            id="modal"
            className="w-[400px] min-h-[500px] bg-[#121212] bg-opacity-90 rounded-lg p-8 shadow-xl mx-auto "
          >
            <h2 className="text-4xl font-bold mb-8 text-center text-white">
              Sign-Up
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <input
                  type="email"
                  id="email"
                  className="text-xl w-full p-3 bg-custom-gray rounded-lg text-white bg-transparent placeholder:text-gray-300"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  required
                  placeholder="Email"
                />
              </div>
              <div className="mb-6">
                <input
                  type="text"
                  id="username"
                  className="w-full text-xl p-3 bg-custom-gray rounded-lg text-white bg-transparent placeholder:text-gray-300"
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                  required
                  placeholder="Username"
                />
              </div>
              <div className="mb-10">
                <input
                  type="password"
                  id="password"
                  className="w-full text-xl p-3 bg-custom-gray rounded-lg text-white bg-transparent placeholder:text-gray-300"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  required
                  placeholder="Password"
                />
              </div>
              {message && (
                <p className="text-red-400 font-medium text-center mb-6">{message}</p>
              )}
              <div className="flex justify-center gap-6">
                <button
                type="submit"
                className="w-1/2 py-3 bg-[#222222] text-white rounded-lg text-xl transition duration-200"
                >
                  Submit
                </button>
              </div>
            </form>
            <p className="text-xl text-center mt-6 text-gray-300 text-lg">
              Already have an account?{" "}
              <a href="../LogIn" className="text-[#d4a017]">
                Log-In
              </a>{" "}
              now!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;

