import React, { useState } from 'react'
import './Register.scss'
import Validation from './Validation'

const Register = () => {

    const [values, setValues] = useState({
        type: "",
        number: "",
        companyname: "",
        firstname: "",
        secondname: "",
        firstlastname: "",
        secondlastame: "",
        email: "",
        address: "",
        municipality: "",
        msgcell: "",
        msgemail: "",
    })
    const [errors, setErrors] = useState({})

    const handleChange = (evt) => {

        const { name, value } = evt.target;
        console.log(name, value)
        setValues({
            ...values,
            [name]: value
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setErrors(Validation(values))
    }

    return (
        <div className="container">
            <form className="form-container" onSubmit={handleSubmit}>
                <h1 className="title">Registration Form</h1>
                <div className="input-field">
                    <label >
                        Identificattion Type*:
                    </label>
                    <select value={values.type} name="type" onChange={handleChange} className="input">
                        <option value="">Select</option>
                        <option value="nit">NIT</option>
                        <option value="not">NOT NIT</option>
                    </select>
                    {errors.type && <p className="error">{errors.type}</p>}
                </div>
                <div className="input-field">
                    <label>
                        Identification Number*:
                    </label>
                    <input
                        className="input"
                        type="number"
                        value={values.number}
                        onChange={handleChange}
                        placeholder="Identification Number"
                        name="number"
                    />
                    {errors.number && <p className="error">{errors.number}</p>}
                </div>
                {values.type === 'nit' ?
                    <div className="input-field">
                        <label>
                            Company Name*:
                        </label>
                        <input
                            className="input"
                            type="text"
                            value={values.companyname}
                            onChange={handleChange}
                            placeholder="Company Name"
                            name="companyname"
                        />
                        {errors.companyname && <p className="error">{errors.companyname}</p>}
                    </div> : ""}
                {values.type === 'not' ? <div className="input-field">
                    <label>
                        First Name*:
                    </label>
                    <input
                        className="input"
                        type="text"
                        value={values.firstname}
                        onChange={handleChange}
                        placeholder="First Name"
                        name="firstname"
                    />
                    {errors.firstname && <p className="error">{errors.firstname}</p>}
                </div> : ""}

                {values.type === 'not' ?
                    <div className="input-field">
                        <label>
                            Second Name*:
                        </label>
                        <input
                            className="input"
                            type="text"
                            value={values.secondname}
                            onChange={handleChange}
                            placeholder="Second Name"
                            name="secondname"
                        />
                        {errors.secondname && <p className="error">{errors.secondname}</p>}
                    </div> : ""}
                {values.type === 'not' ?
                    <div className="input-field">
                        <label>
                            First Last Name*:
                        </label>
                        <input
                            className="input"
                            text="text"
                            value={values.firstlastname}
                            onChange={handleChange}
                            placeholder="First Last Name"
                            name="firstlastname"
                        />
                        {errors.firstlastname && <p className="error">{errors.firstlastname}</p>}
                    </div> : ""}
                {values.type === 'not' ?
                    <div className="input-field">
                        <label>
                            Second Last Name*:
                        </label>
                        <input
                            className="input"
                            type="text"
                            value={values.secondlastame}
                            onChange={handleChange}
                            placeholder="Second Last Name"
                            name="secondlastame"
                        />
                        {errors.secondlastame && <p className="error">{errors.secondlastame}</p>}
                    </div> : ""}
                <div className="input-field">
                    <label>
                        Email*:
                    </label>
                    <input
                        className="input"
                        text="text"
                        value={values.email}
                        onChange={handleChange}
                        placeholder="email"
                        name="email"
                    />
                    {errors.email && <p className="error">{errors.email}</p>}
                </div>
                <div className="input-field">
                    <label>
                        Address*:
                    </label>
                    <textarea
                        className="textarea"
                        type="text"
                        value={values.address}
                        onChange={handleChange}
                        placeholder="Address"
                        name="address"
                    />
                    {errors.address && <p className="error">{errors.address}</p>}
                </div>
                <div className="input-field">
                    <label>
                        Municipality*:
                    </label>
                    <input
                        className="input"
                        type="text"
                        value={values.municipality}
                        onChange={handleChange}
                        placeholder="Municipality"
                        name="Municipality"
                    />
                    {errors.municipality && <p className="error">{errors.municipality}</p>}
                </div>
                <div className="input-field">
                    <label>
                        Cell Phone*:
                    </label>
                    <input
                        className="input"
                        type="number"
                        value={values.cellphone}
                        onChange={handleChange}
                        placeholder="Cell Phone"
                        name="cellphone"
                    />
                    {errors.cellphone && <p className="error">{errors.cellphone}</p>}
                </div>
                <div className="radio-field">
                    <input
                        className="radio"
                        type="radio"
                        value={values.msgcell}
                        onChange={handleChange}
                        name="msgcell"
                    /> I Authorize the sending of messages tho the cell phone provided
                </div>
                <div className="radio-field">
                    <input
                        className="radio"
                        type="radio"
                        value={values.msgemail}
                        onChange={handleChange}
                        name="msgemail"
                    />I Authorize the sending of messages tho the Email address provided
                </div>
                <div className="button-container">
                    <button className="button">Register</button>
                </div>
            </form>
        </div>
    )
}

export default Register