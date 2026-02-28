import React, { useState } from 'react'

const Ok = () => {
  const [username, setUsername] = useState('');
  const [errmessage, setErrorMessage] = useState('');

  const changeHandler = (e) => {
    setUsername(e.target.value);
  }

  const validateForm = (e) => {
    e.preventDefault();
    if (!username || username.length <= 4) {
      setErrorMessage("Name should be at least 5 characters long");
    } else {
      setErrorMessage('');
    }
  }

  return (
    <>
      <header><h1>Registration form</h1></header>
      <form>
        <div className='form-group'>
          <label>Enter your name</label>
          <input type="text" placeholder='Enter your name' name="username" value={username} onChange={changeHandler} required />
        </div>
        <p>
          {errmessage && <p className='error-message'>{errmessage}</p>}
        </p>

        <button onClick={validateForm}>Register</button>
      </form>
    </>
  )
}

export default Ok