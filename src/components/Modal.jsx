import React, { useEffect } from 'react';
import './Modal.css';

const Modal = ({ isOpen, onClose, backgroundColor, children }) => {
    // ... (useEffect remains same)

    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div
                className="modal-content"
                onClick={e => e.stopPropagation()}
                style={{ background: backgroundColor || 'linear-gradient(135deg, var(--color-2), var(--color-1))' }}
            >
                <button className="modal-close" onClick={onClose}>&times;</button>
                {children}
            </div>
        </div>
    );
};

export default Modal;
