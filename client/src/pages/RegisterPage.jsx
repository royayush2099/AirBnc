import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function registerUser(ev) {
    ev.preventDefault(); // prevents the default form submission behavior
    try {
      await axios.post('/register', {
        name,
        email,
        password,
      });
      alert('Registration successful. Now you can log in');
    } catch (e) {
      alert('Registration failed. Please try again later');
    }
  }

  // Common styles for input fields (moved outside of registerUser)
  const inputStyle = 'w-full p-2 border border-gray-300 rounded mb-4';

  return (
    <div className='mt-4 grow flex items-center justify-around'>
      <div className='mb-64'>
        <h1 className='text-4xl text-center mb-4'>Register</h1>
        <form className='max-w-md mx-auto' onSubmit={registerUser}>
          <input
            type="text"
            placeholder='John Doe'
            value={name}
            onChange={ev => setName(ev.target.value)}
            className={inputStyle} // Apply common input style
          />
          <input
            type="email"
            placeholder='your@email.com'
            value={email}
            onChange={ev => setEmail(ev.target.value)}
            className={inputStyle} // Apply common input style
          />
          <input
            type='password'
            placeholder='password'
            value={password}
            onChange={ev => setPassword(ev.target.value)}
            className={inputStyle} // Apply common input style
          />
          <button className='primary w-full p-2 bg-blue-500 text-white rounded'>Register</button>
          <div className='text-center py-2 text-gray-500'>
            Already a member? <Link className='underline text-black' to={'/login'}>Login Now</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
