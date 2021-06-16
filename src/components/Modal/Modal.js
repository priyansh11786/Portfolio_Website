import React from 'react'
import ReactDOM from 'react-dom'
import './Modal.css'

const Modal = ({ closeModal }) => {
    return ReactDOM.createPortal(
        <div className="modal-overlay">
            <div className="modal-container">
                <div className="upper-section">
                    <h1>Quick Remainder</h1>
                    <p onClick={closeModal} className="close">&times;</p>
                </div>
                <div className="middle-section">
                    <p>Are you Someone who likes to read Blogs?</p>
                    <p>
                        If yes then,I also write blogs on Medium about Different Technologies
                    </p>
                    <p>Feel Free to check it out by clicking on the green button below. Happy Learning!!</p>
                </div>
                <div className="lower-section">
                    <a onClick={closeModal} className="modal-btn btn-red">Close</a>
                    <a href="https://priyanshdarji838.medium.com/" target="_blank" rel="noreferrer" className="modal-btn btn-green">Read</a>
                </div>
            </div>
        </div>,
        document.getElementById('Modal'))
}

export default Modal