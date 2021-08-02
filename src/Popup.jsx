import React from 'react';
import './Popup.scss'

const Popup = ({ children, show, onClose }) => {

    console.log("show", show)
    return (
        <React.Fragment>

            <div className={`modal__wrap backdropStyle ${show ? "visible" : ""}`}>

                <div className='modal'>
                    {children}
                    <button
                        onClick={onClose}
                        style={{ width: 60, height: 40, position: 'absolute', top: -15, right: -15, margin: '16px', backgroundColor: "Tomato" }}
                    //className="close__btn"
                    >
                        X
                    </button>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Popup;

