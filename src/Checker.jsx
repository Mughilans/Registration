import React, { useState } from 'react'
import { useHistory } from 'react-router';
import './Checker.scss'
import Popup from './Popup';

const Checker = () => {
    const history = useHistory();

    const [number, setNumber] = useState("")
    const [show, setShow] = useState(false)
    const handleChange = (event) => {
        setNumber({ number: event.target.value })
    }

    const handleregister = () => {
        history.push('/register')
    }

    const handlecontinue = () => {
        setShow(true)
    }

    return (
        <div className="inpt-container">
            <div className="inpt-field">
                <p>Enter your Company's Identification Number</p>
                <label className="label">
                    Service Registration:
                </label>
                <input
                    className="input"
                    type="number"
                    value={setNumber}
                    onChange={handleChange}
                    name="Identification Number"
                />
                <div className="button-container">
                    <button className="button" onClick={handlecontinue}>Continue</button>
                    <button className="button" onClick={handleregister}>Register</button>
                </div>

                <Popup show={show} onClose={() => setShow(!show)} >

                    <p className="modal-content">Your Company Identification number is not registered yet, so Click on register button to register first</p>
                </Popup>
            </div>
        </div >
    )
}

export default Checker