import React from 'react'
import { useFormik } from 'formik';
import validationSchema from '../validation'

function Singup() {
    const { handleSubmit, handleChange,handleBlur, values, errors, touched } = useFormik({
        initialValues: {
            email: '',
            password: '',
            passwordConfirm: '',
        },
        onSubmit: (values) => {
            console.log(values);
        },
        validationSchema
    });

    console.log(errors);

    return (
        <div>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    name="email"
                    values={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="email"
                />
                {errors.email && touched.email && <div className='error'>{errors.email}</div>}

                <label htmlFor="password">password</label>
                <input
                    id="password"
                    name="password"
                    values={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="password"
                />
                {errors.password && touched.password && <div className='error'>{errors.password}</div>}

                <label htmlFor="passwordConfirm">Confirm Password</label>
                <input
                    id="passwordConfirm"
                    name="passwordConfirm"
                    values={values.passwordConfirm}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="password"
                />
                {errors.passwordConfirm && touched.passwordConfirm && <div className='error'>{errors.passwordConfirm}</div>}

                <button className='buton' type="submit">Submit</button>
                <br /><br />
                <code>{JSON.stringify(values)}</code>
            </form>
        </div>
    )
}

export default Singup