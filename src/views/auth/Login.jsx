import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Login = () => {
  const [state, setState] = useState({
    email: '',
    password: ''
  });

  const inputHandle = (e) => {
    setState({
        ...state,
        [e.target.name]: e.target.value
    }); 
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
  }

  return (
    <div className='min-w-screen min-h-screen bg-[#cdcae9] flex justify-center items-center'>
      <div className='w-[350px] text-[#fff] p-2'>
        <div className='bg-[#6f68d1] p-4 rounded-md'>
            <h2 className='text-xl mb-3 font-bold'>Welcome to Ecommerce</h2>
            <p className='text-sm mb-3 font-medium'>Please Sign In your account</p>

            <form action="" onSubmit={handleSubmit}>
                <div className='flex flex-col w-full gap-1 mb-3'>
                    <label htmlFor="email">Email</label>
                    <input type="text" className='px-3 py-2 outline-none border border-slate-400 bg-transparent rounded-md' name='email' 
                        placeholder='Enter your email' id='email' required value={state.email} onChange={inputHandle} />
                </div>

                <div className='flex flex-col w-full gap-1 mb-3'>
                    <label htmlFor="pasword">Password</label>
                    <input type="password" className='px-3 py-2 outline-none border border-slate-400 bg-transparent rounded-md' name='password' 
                        placeholder='Enter your password' id='password' required value={state.password} onChange={inputHandle} />
                </div>

                <button className='bg-slate-800 w-full hover:shadow-blue-300 hover:shadow-lg text-white rounded-md px-7 py-2 mb-3'>Sign In</button>

                <div className='flex items-center mb-3 gap-3 justify-center'>
                    <p>Don't Have an account ? <Link className='font-bold' to='/register'>Sign up</Link></p>
                </div>

                <div className='w-full flex justify-center items-center mb-3'>
                    <div className='w-[45%] bg-slate-700 h-[1px]'></div>
                    <div className='w-[10%] flex justify-center items-center'>
                        <span className='pb-1'>Or</span>
                    </div>
                    <div className='w-[45%] bg-slate-700 h-[1px]'></div>
                </div>

                <div className='flex justify-center items-center gap-3'>
                    <div className='w-[135px] h-[35px] flex rounded-md bg-orange-700 shadow-lg hover:shadow-orange-700/50 
                        justify-center cursor-pointer items-center overflow-hidden'>
                        <span><FaGoogle color='white' /></span>
                    </div>

                    <div className='w-[135px] h-[35px] flex rounded-md bg-blue-700 shadow-lg hover:shadow-blue-700/50 
                        justify-center cursor-pointer items-center overflow-hidden'>
                        <span><FaFacebook color='white' /></span>
                    </div>
                </div>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Login;
