import { React, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./styles/styles.css";
import GoogleIcon from "../assets/Google.svg";
import Logo from "../assets/logo.png";
import Input from "../components/Input";
import { Loader, MailIcon, Eye, EyeOff } from "lucide-react"; // Import Eye and EyeOff icons
import { useAuthstore } from '../Stores/authstores';
import { toast, ToastContainer } from 'react-toastify';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("student"); // New state for user type
  const [rememberMe, setRememberMe] = useState(false); // New state for remember me
  const [showPassword, setShowPassword] = useState(false); // New state for toggling password visibility
  const { login, isLoading, error } = useAuthstore();
  const notify = (message) => toast.error(message); // Notify function
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const backendUrl = userType === "teacher" ? "/teacherlogin" : "/studentLogin"; // Determine backend URL
      await login(email, password, backendUrl, rememberMe); // Pass backend URL and rememberMe to login function

      if (userType === "teacher") {
        navigate("/teacher-dashboard"); // Navigate to teacher dashboard
      } else {
        navigate("/dashboard"); // Navigate to student dashboard
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section
  className="min-h-screen min-w-auto flex items-center"
>
      <div className="lg:w-screen min-h-screen hidden lg:block bg-[url('https://s3-alpha-sig.figma.com/img/ffed/033b/eac4ec8c986b5ecc26305e3347d08700?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=V~rRbjhW4jp3eWBPZLwno3lS2K1FcENxP5ZPhkO0X2kZiOcbb1LYrCCSOmH21dcxYSgY0Fex24zNpgYcMGNeV1EZPIggdQ7iae0~6NO1koisUeodinxYoQZKl1x8YVpG73icE-RQnOB6-Yy54AI31AlKUgdxOyBJaJqJ9zSjBcTKBqVHeU1KurYVis8eQ6QGLaaar7w8yO86fEuDlCdhc7fdF3h4bYRZooaAVumzlt-LNz9NwG9MKbKJE3m-PnD04I-x2Rd~RDtU1FEt7qU8KeMRYLqS9D~iRMUKww1fHxMFN-MneKTRaURm3cTUCem2TKyjB4dY5ChyjVkWG6biig__')] bg-cover bg-center">
        {/* <div className=' font-bold relative top-20 left-20 flex flex-col'>
          <h1 className='text-display font-bold'>Learn without limits</h1>
          <h2 className='text-small font-normal mb-5 w-1/2'>Start, switch, or advance your career with more than 7,000 courses, Professional Certificates, and degrees from world-class universities and companies.</h2>
          <Link to="/" className='w-0'><span className='bg-primary py-3 px-8 text-center rounded-full  w-auto font-semibold text-white'>Explore</span></Link>
        </div> */}
      </div>
      <div className=" flex flex-col items-center justify-center lg:w-1/2 w-screen h-screen bg-white">
        <div className="flex flex-col items-center justify-center  h-auto  rounded-2xl">
          <div className='Top-login px-2 md:w-96 w-auto text-center'>
            <div className="mb-4 relative left-24 md:left-32 w-fit">
              <img src={Logo} alt="logo " />
            </div>
            <h2 className="md:text-h2 text-4xl text-center mb-4">Login</h2>
            <p className='md:text-lg text-lg mb-2'>Step towards Success</p>
            {/* <div className='border-2 border-black text-center py-2 w-full  md:text-h4 flex items-center rounded-md justify-center gap-2'>
              <img src={GoogleIcon} alt="" />Google
            </div>
            <div className="divider text-center my-2">
              OR
            </div> */}

            <div className='Form-login'>
              <form onSubmit={handleLogin}>
                <Input
                  type="email"
                  placeholder="abc@gmail.com"
                  icon={MailIcon}
                  label={"Email *"}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <div className="relative">
                  <Input
                    type={showPassword ? "text" : "password"} // Toggle input type
                    icon={MailIcon}
                    label={"Password *"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <div
                    className="absolute top-6 inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)} // Toggle password visibility
                  >
                    {showPassword ? <EyeOff size={24} /> : <Eye size={24} />}
                  </div>
                </div>

                <div className="flex gap-10 items-center mb-4">
                  <label>
                    <input
                      type="radio"
                      name="userType"
                      value="student"
                      checked={userType === "student"}
                      onChange={() => setUserType("student")}
                    />
                    Student
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="userType"
                      value="teacher"
                      checked={userType === "teacher"}
                      onChange={() => setUserType("teacher")}
                    />
                    Teacher
                  </label>
                </div>
                <Link to="/forgetpassword"><p className='md:text-end text-start underline underline-offset-1  text-lg relative bottom-2 '>Forget Password?</p></Link>

                <motion.button
                  className='bg-primary text-center flex justify-center text-white w-full py-4 text-small rounded-md mt-10'
                  type='submit'
                  disabled={isLoading}
                >
                  {isLoading ? <Loader /> : "Login"}
                </motion.button>

                <span className='Signup text-md'> Don't have an account? <Link to="/signup" className='underline font-bold underline-offset-1 text-primary'>Sign Up</Link></span>
              </form>
              {/* { error && <p className='text-red-500'>{error}</p> } */}
              {error && <p className='text-red-500'>{error}</p>}
              {/* <ToastContainer 
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              /> */}
              <div className='relative md:right-28 md:bottom-40 mt-1 bottom-32  right-16'>
                <input
                  className=' h-5'
                  type="checkbox"
                  id='remember'
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                />
                <label htmlFor="remember" className='text-lg relative bottom-1'> Remember Me</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login;