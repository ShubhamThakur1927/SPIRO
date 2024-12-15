import { motion } from "framer-motion";
import { Loader, Lock, Mail, User } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PasswordStrengthMeter from "../componets/PasswordStrengthMeter";
import { useAuthStore } from "../store/authStore";

function LoginSignup() {
  const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [passwordConfirm, setPasswordConfirm] = useState("");
	const navigate = useNavigate();

	const { signup, error, isLoading } = useAuthStore();

	const handleSignUp = async (e) => {
		e.preventDefault();

		try {
			await signup(email, password, passwordConfirm );
			navigate("/verify-email");
		} catch (error) {
			console.log(error);
		}
	};
  return (
    <>
    <div className="w-full h-screen flex items-start font-rethink-sans">
      <div className="relative w-1/2 h-full flex flex-col bg-[#EAEAEA] bg-cover bg-center justify-between bg-[url('https://images.unsplash.com/photo-1608600712992-03e5325d94c8?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
        <div className='bg-slate-400 bg-opacity-35 w-full h-screen '>
          <div className='relative top-60 left-14'>
          <h1 className='text-white text-4xl'>Your future begins here</h1>
          <p className='text-white font-normal mt-3'><span className='font-bold'>Sign up </span>to unlock endless possibilities!</p>
          <button className='w-auto py-4 px-10 border-2 border-white  bg-transparent  text-white font-extrabold rounded-xl my-10 hover:bg-white hover:text-black'>Sign up</button>
          
          </div>

        </div>
      </div>
      <div className="bg-[#020817] relative w-1/2 h-full flex flex-col p-10 text-white text-center justify-between">
        <h1 className="text-2xl underline underline-offset-4 text-center py-10 marko-one-regular">SPIRO</h1>
        <div className="w-fit flex flex-col mx-24 border-2 border-[#5c606b] rounded-xl">
          <div className='py-20 px-10'>
          <div className='w-full flex flex-col mb-10'>
          {/* Login */}
          <h3 className='text-2xl font-semibold mb-4 '>Login</h3>
          {/* Subtitle */}
          <p className='text-lg mb-2'>Welcome Back! Please Enter you details.</p>
          </div>
          <div className='w-full flex flex-col'>
          <form onSubmit={handleSignUp}>
					<Input
						icon={Mail}
						type='email'
						placeholder='Email Address'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<Input
						icon={Lock}
						type='password'
						placeholder='Password'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<Input
						icon={Lock}
						type='password'
						placeholder='Password Confirm'
						value={passwordConfirm}
						onChange={(e) => setPasswordConfirm(e.target.value)}
					/>
					{error && <p className='text-red-500 font-semibold mt-2'>{error}</p>}
					<PasswordStrengthMeter password={password} />

					<motion.button
						className='mt-5 w-full py-3 px-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white 
						font-bold rounded-lg shadow-lg hover:from-green-600
						hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2
						 focus:ring-offset-gray-900 transition duration-200'
						whileHover={{ scale: 1.02 }}
						whileTap={{ scale: 0.98 }}
						type='submit'
						disabled={isLoading}
					>
						{isLoading ? <Loader className=' animate-spin mx-auto' size={24} /> : "Sign Up"}
					</motion.button>
				</form>
            <div className='w-full flex items-center justify-between'>
              <div className='w-full flex'>
                <input type="checkbox" className='w-4 h-4 mr-2 bg-transparent' />
                <p className='text-sm'>Remember Me</p>
              </div>
              <p className="text-sm underline font-medium underline-offset-2 cursor-pointer whitespace-nowrap">Forget password?</p>
            </div>

            <button className='w-full py-4 border-2 border-[#5c606b]  bg-transparent  text-white font-extrabold rounded-xl my-10 hover:bg-white hover:text-black'>Login</button>
            <div className='w-full items-center justify-center'>
            <p className='text-sm'>Don't have an account? <Link to="/signup"><span className='underline font-extrabold underline-offset-2 cursor-pointer'>Sign Up</span></Link></p>
          </div>
          </div>
          </div>
          </div>

          {/* Don't Have Account */}
      </div>
    </div>
    <Outlet/>
    </>
  );
}

export default LoginSignup;
