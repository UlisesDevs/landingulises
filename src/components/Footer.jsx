import React from 'react';

const Footer = () => {
    return (
        <footer style={{
            padding: '2rem',
            textAlign: 'center',
            marginTop: 'auto',
            color: 'var(--color-2)',
            opacity: 0.8
        }}>
            <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
        </footer>
    );
};

export default Footer;
