import React, { useState } from "react";
import "./styles/styles.css";
import Input from "../components/Input";
import { motion } from "framer-motion";
import GoogleIcon from "../assets/Google.svg";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/logo.png";
import { Circle, Edit2Icon, CircleCheck, Loader } from "lucide-react";
import { useAuthstore } from "../Stores/authstores";
import OtpInput from "../components/Otp-input";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { signup, error, isLoading } = useAuthstore();
  const { verify } = useAuthstore();
  const [showOtp, setShowOtp] = useState(false);
  const navigate = useNavigate();
  const [otp, setOtp] = useState(""); // Add OTP state

  const [valid, setValid] = useState({
    passwordLength: false,
    isUpperCase: false,
    isLowerCase: false,
    isNumber: false,
    isSpecialChar: false,
  });

  // Password Validation function
  const handlePasswordChange = (password) => {
    const newValid = {
      passwordLength: password.length >= 8,
      isUpperCase: /[A-Z]/.test(password),
      isLowerCase: /[a-z]/.test(password),
      isNumber: /[0-9]/.test(password),
      isSpecialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password),
    };
    setValid(newValid);
    setPassword(password);
  };

  const handleverification = async (e) => {
    e.preventDefault();
    try {

      const response = await verify(otp); // Pass navigate function
      console.log(response.success);
      if(response.success == true) {
        setShowOtp(false);
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await signup(email, password, confirmPassword);
      setShowOtp(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="bg-black min-h-screen min-w-auto flex items-center">
      <div className="lg:w-screen min-h-screen hidden lg:block text-white">
        <div className="font-bold relative top-20 left-20 flex flex-col">
          <h1 className="text-display font-bold">Learn without limits</h1>
          <h2 className="text-small font-normal mb-5 w-1/2">
            Start, switch, or advance your career with more than 7,000 courses,
            Professional Certificates, and degrees from world-class universities
            and companies.
          </h2>
          <Link to="/">
            <span className="bg-primary py-3 px-8 text-center rounded-full font-semibold text-white">
              Explore
            </span>
          </Link>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center lg:w-1/2 w-screen h-screen bg-white">
        <div className="flex flex-col items-center justify-center h-auto rounded-2xl">
          {!showOtp ? (
            <div className="Top-login flex flex-col align-middle items-center px-2 md:w-96 w-auto text-center">
              <div className="mb-2">
                <img src={Logo} alt="logo" className="h-20 md:h-full" />
              </div>
              <h2 className="text-2xl text-center md:text-4xl mb-1">
                Create Account
              </h2>
              <p className="md:text-xl text-sm mb-2">One Click To Our World</p>
              <div className="border-2 border-black text-center py-2 w-full md:text-h4 flex items-center rounded-md justify-center gap-2">
                <img src={GoogleIcon} alt="" />
                Google
              </div>
              <div className="divider text-center my-2">OR</div>

              <div className="Form-login">
                <form onSubmit={handleSignUp}>
                  <Input
                    type="email"
                    placeholder="abc@gmail.com"
                    label={"Email *"}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />

                  <Input
                    type="password"
                    label={"Password *"}
                    value={password}
                    onChange={(e) => handlePasswordChange(e.target.value)}
                  />
                  {/* Password Strength Checker */}
                  <div className="validation-rules flex flex-col justify-start text-left text-sm gap-2 mb-2 md">
                    <p className="flex gap-2 ">
                      {valid.passwordLength ? (
                        <CircleCheck color="green" size={20} />
                      ) : (
                        <Circle size={20} />
                      )}
                      Use at least 8 characters
                    </p>
                    <p className="flex gap-2  ">
                      {valid.isUpperCase &&
                      valid.isLowerCase &&
                      valid.isNumber ? (
                        <CircleCheck color="green" size={20} />
                      ) : (
                        <Circle size={20} />
                      )}
                      Include uppercase, lowercase, numbers
                    </p>
                    <p className="flex gap-2 ">
                      {valid.isSpecialChar ? (
                        <CircleCheck color="green" size={20} />
                      ) : (
                        <Circle size={20} />
                      )}{" "}
                      Include special symbols (e.g., @, #, $, &)
                    </p>
                  </div>

                  <Input
                    type="password"
                    label={"Confirm Password *"}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                  <div className="text-start">
                    <input type="checkbox" className="h-5 w-4 relative top-1" />{" "}
                    I agree with{" "}
                    <span className="underline underline-offset-1">Terms </span>
                    and{" "}
                    <span className="underline underline-offset-1">
                      {" "}
                      Privacy policy
                    </span>
                  </div>
                  <motion.button
                    className="bg-primary text-center flex justify-center text-white w-full  py-2 md:py-4 text-small rounded-md my-2"
                    type="submit"
                    disabled={isLoading}
                  >
                    {isLoading ? <Loader /> : "Sign Up"}
                  </motion.button>
                  {error && <p className="text-red-500 text-center">{error}</p>}
                  <span className="Signup text-sm md:text-md">
                    Already have an account?{" "}
                    <Link
                      to="/login"
                      className="underline font-bold underline-offset-1 text-primary"
                    >
                      Login
                    </Link>
                  </span>
                </form>
              </div>
            </div>
          ) : (
            <div className="Top-login px-2 md:w-96 w-auto text-center">
              <h2 className="md:text-h2 text-4xl text-center mb-4">
                Verify OTP
              </h2>
              <p className="md:text-lg text-lg mb-2">
                Enter OTP send on Your Email
              </p>
              <div className="border-2 border-black text-center py-2 w-full  md:text-h4 flex items-center rounded-full justify-center gap-2">
                {email}{" "}
                <Link to="/teachersignup">
                  <Edit2Icon />
                </Link>
              </div>

              <div className="Form-login my-10">
                <form onSubmit={handleverification}>
                  <OtpInput length={6} onOtpSubmit={(otp) => setOtp(otp)} />{" "}
                  {/* Update OTP state */}
                  <motion.button
                    className="bg-primary text-center flex justify-center text-white w-full py-4 text-small rounded-md mt-10"
                    type="submit"
                    disabled={isLoading}
                  >
                    {isLoading ? <Loader /> : "Login"}
                  </motion.button>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Signup;
