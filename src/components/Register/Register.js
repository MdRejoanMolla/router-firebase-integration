import React from 'react';

const Register = () => {
      return (
            <div>
                  <h1>Please Register</h1>
                  <form>
                        <input type="tex" placeholder='your name'></input><br />
                        <input type="tex" placeholder='your email'></input> <br />
                        <input type='password' placeholder='password'></input>
                        <br />
                        <input type="submit" value="Register" />

                  </form>
            </div>
      );
};

export default Register;