
import React, { useState } from 'react';

function Login() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [skills, setSkills] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setPassword('');
    setAge('');
    setGender('');
    setSkills('');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    } else if (name === 'age') {
      setAge(value);
    } else if (name === 'gender') {
      setGender(value);
    } else if (name === 'skills') {
      setSkills(value);
    }
  };

  return (
    <>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input className='styles.login-form input'
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          placeholder="Your name"
        />
        <input 
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          placeholder="Email address"
        />
        <input  
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          placeholder="Password"
        />
        <input  
          type="number"
          name="age"
          value={age}
          onChange={handleChange}
          placeholder="Your age"
        />
        <select  name="gender" value={gender} onChange={handleChange}>
          <option value="">Select gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <textarea
          name="skills"
          value={skills}
          onChange={handleChange}
          placeholder="Tell us about your skills"
        ></textarea>
        <div>
          <button type="submit">Login</button>
          <button type="button" onClick={handleReset}>Reset</button>
        </div>
      </form>
    </>
  );
}

export default Login;