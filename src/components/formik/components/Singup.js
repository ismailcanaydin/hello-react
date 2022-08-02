import React from 'react'
import { useFormik } from 'formik';

function SingUp() {
    const { handlSubmit, handlChange, values } = useFormik({
        initialValues: {
          email: '',
          password: '',
          passwordConfirm: '',
        },
        onSubmit: (values) => {
          console.log(values);
        },
      });
    
    return (
        <div>
            <h1>Sign Up</h1>
            <form onSubmit={handlSubmit}>
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    name="email"
                    values={values.email}
                    onChange={handlChange}
                    type="email"
                />
                <label htmlFor="password">password</label>
                <input
                    id="password"
                    name="password"
                    values={values.password}
                    onChange={handlChange}
                    type="password"
                />
                <label htmlFor="passwordConfirm">Confirm Password</label>
                <input
                    id="passwordConfirm"
                    name="passwordConfirm"
                    values={values.passwordConfirm}
                    onChange={handlChange}
                    type="passwordConfirm"
                />
                <button className='buton' type="submit">Submit</button>
                <br /><br />
                <code>{JSON.stringify(values)}</code>
            </form>
        </div>
    )
}

export default SingUp