import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { admin_login } from '../../store/Reducers/authReducer';

const AdminLogin = () => {
  const dispatch = useDispatch();
    
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
    dispatch(admin_login(state));
    // console.log(state);
  }

  return (
    <div className='min-w-screen min-h-screen bg-[#cdcae9] flex justify-center items-center'>
      <div className='w-[350px] text-[#fff] p-2'>
        <div className='bg-[#6f68d1] p-4 rounded-md'>
            <div className='h-[70px] flex justify-center items-center'>
                <div className='w-[180px] h-[50px]'>
                    <img src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="Logo" />
                </div>
            </div>
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

                <button className='bg-slate-800 w-full hover:shadow-blue-300 hover:shadow-lg text-white rounded-md px-7 py-2 mb-3'>Login</button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default AdminLogin;
