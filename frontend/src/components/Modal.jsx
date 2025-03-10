import React from 'react';

function Modal({ children, onClose }) {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-4 rounded shadow-lg relative">
                <button className="absolute top-2 right-2" onClick={onClose}>X</button>
                {children}
            </div>
        </div>
    );
}

export default Modal;
