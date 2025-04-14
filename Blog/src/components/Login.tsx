import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';
import {users} from '../data/database.js';
import { FormData, schema } from '../data/formSchema.js';
import { Person } from '../App.js';
import { useNavigate } from 'react-router';

interface Props {
  setUser : (data : Person) => void
}

const Login = ({setUser}:Props) => {
  const navigate =  useNavigate();
  const {formState:{errors} , reset , handleSubmit , register} = useForm({resolver : zodResolver(schema)});

  const [visible, setVisible] = useState(false);

  const submithandler = (data:FormData) => {
    const user = users.find(user => user.login === data.login && user.password === data.password);
    if(user){
      console.log(user);
      setUser(user);
      reset();
      navigate('/');
    }
  }

  return (
    <div>
      <h1 className='text-4xl font-bold text-center my-5'>Login Page</h1>
      <form onSubmit={handleSubmit(submithandler)} className='flex flex-col gap-5 max-w-[600px] mx-auto'>
        <input
          className='w-full outline-none border-2 border-slate-400 px-2 text-lg py-1 rounded-md'
          type='text'
          placeholder='Login'
          {...register('login' , {required : true})}
        />
        {errors.login && <span className='text-red-600'>{errors.login.message}</span>}
        <label
          className='w-full border-2 border-slate-400 px-2 text-lg py-1 rounded-md flex items-center'
          htmlFor='password'
        >
          <input
            id='password'
            type={visible ? 'text' : 'password'}
            className='outline-none w-[calc(100%-20px)]'
            placeholder='Password'
            {...register('password' , {required : true})}
          />
          <div onClick={() => setVisible(!visible)}>
            {visible ? <IoMdEyeOff className='text-2xl' /> : <IoMdEye className='text-2xl' />}
          </div>
        </label>
        {errors.password && <span className='text-red-600'>{errors.password.message}</span>}
        <button type='submit' className='bg-blue-600 text-white py-2 text-xl rounded-lg w-40 mx-auto'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
