import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Modal } from 'antd';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secret, setSecret] = useState('');
  const [ok, setOk] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(name, email, password, secret);
    try {
      const res = await axios.post('http://localhost:5000/api/register', {
        name,
        email,
        password,
        secret,
      });
      console.log(res);
      setOk(res.data.ok);
    } catch (error) {
      toast.error(error.response.data);
    }
  };

  return (
    <div className='container-fluid'>
      <div className='row py-5 bg-secondary text-light'>
        <div className='col text-center'>
          <h1>Register Page</h1>
        </div>
      </div>
      <div className='row py-5'>
        <div className='col-md-6 offset-md-3'>
          <form onSubmit={handleSubmit}>
            <div className='form-group p-2'>
              <small>
                <label htmlFor='Your Name' className='text-muted'>
                  Your Name
                </label>
              </small>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type='text'
                className='form-control'
                placeholder='Enter Your name'
              />
            </div>
            <div className='form-group p-2'>
              <small>
                <label htmlFor='Your Email' className='text-muted'>
                  Your Email
                </label>
              </small>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type='email'
                className='form-control'
                placeholder='Enter Your Email'
              />
            </div>
            <div className='form-group p-2'>
              <small>
                <label htmlFor='Your Password' className='text-muted'>
                  Your Password
                </label>
              </small>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type='password'
                className='form-control'
                placeholder='Enter Your Password'
              />
            </div>
            <div className='form-group p-2'>
              <small>
                <label className='text-muted'>Pick a question</label>
              </small>
              <select className='form-control'>
                <option>What is your favorite color?</option>
                <option>What is your Bestfriend name?</option>
                <option>Which city you were born?</option>
              </select>
              <small className=' form-text text-muted'>
                You can use this to reset your password if forgotten
              </small>
            </div>
            <div className='form-group p-2'>
              <input
                value={secret}
                onChange={(e) => setSecret(e.target.value)}
                type='text'
                className='form-control'
                placeholder='Enter Your Answer'
              />
            </div>
            <div className='form-group p-2'>
              <button className='btn btn-primary btn-block col-12'>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className='row'>
        <div className='col'>
          <Modal title='congratulation' visible={true} />
        </div>
      </div>
    </div>
  );
};

export default Register;
