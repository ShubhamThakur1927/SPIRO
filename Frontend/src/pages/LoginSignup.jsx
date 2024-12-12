import { useState } from 'react';
import ReactDOM from 'react-dom/client';

function LoginSignup() {
 const [name, setName] = useState("");
  return (
    <div className="h-screen w-screen flex font-rethink-sans">
      <div className="bg-[#EAEAEA] w-1/2"></div>
      <div className="bg-[#020817] w-1/2 text-white grid text-center align-middle items-center text-2xl">
        {/*<img src={} alt="" />*/}
        <h1 className='relative top-16 '>Logo</h1>
        <div className="flex flex-col border-solid border-2 text-center mx-[186px] rounded-2xl border-[#27272A] w-[387px] h-[507px] py-8 ">
            <h1 className='underline'>Login</h1>
            <form className='p-8 text-center '>
                <label className=''>Enter Your name
                <input type="text" />
                </label>
            </form>
        </div>
      </div>
    </div>
  );
}

export default LoginSignup;
