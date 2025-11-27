import React, { useState, useEffect } from 'react';

const Clock = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="clock-container">
            <div className="clock-time">
                {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </div>
            <div className="clock-date">
                {time.toLocaleDateString([], { weekday: 'short', month: 'short', day: 'numeric' })}
            </div>
        </div>
    );
};

export default Clock;
