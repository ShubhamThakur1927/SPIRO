import React, { useState } from 'react';
import { Mail, Lock } from 'lucide-react';
import Input from '../Componets/Input';
import './Styles/Home.css';
import { Link } from 'react-router-dom';
import { useAuthStore } from '../stores/authStore';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { login,error} = useAuthStore();
    const handleLogin = async (e) => {
        e.preventDefault();
        // Replace `login` with your actual login function
        await login(email, password);
    };

    return (
        <div className='h-screen w-screen Inter flex'>
            <div className='w-3/5 bg-[#392B88] h-auto'></div>
            <div className='w-2/5 h-auto bg-slate-700'>
                <div className='border border-gray-300 h-auto my-44 mx-32 rounded-lg text-center bg-white'>
                    <div className="m-8 w-auto h-auto">
                        <h2 className='font-bold mb-16'>LOGIN</h2>
                        <form onSubmit={handleLogin}>
                            <Input
                                icon={Mail}
                                label="Email*"
                                id="email"
                                type="email"
                                placeholder="Email Address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <Input
                                icon={Lock}
                                label="Password*"
                                id="password"
                                type="password"
                                placeholder="Enter password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            {error && <p className='text-red-500 font-semibold mb-2'>{error}</p>}
                            <Link to="*"><p className='relative body text-end underline top-0'>Forget Password?</p></Link>
                            <button
                                type="submit"
                                className="mt-4 px-28 py-2 bg-black text-white   rounded-lg hover:bg-[#4b3ea1] transition duration-200"
                            >
                                Login
                            </button>
                        </form>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
