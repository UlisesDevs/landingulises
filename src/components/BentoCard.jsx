import React from 'react';
import './BentoCard.css';

const BentoCard = ({ title, image, hoverImage, backgroundColor, children, onClick, className, style }) => {
    const [isHovered, setIsHovered] = React.useState(false);

    return (
        <div
            className={`bento-card ${className || ''}`}
            onClick={onClick}
            style={{ ...style, background: backgroundColor }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="bento-content">
                <h3>{title}</h3>
                {image && (
                    <img
                        src={isHovered && hoverImage ? hoverImage : image}
                        alt={title}
                        className="bento-image"
                    />
                )}
                {children && (
                    <div className="bento-preview">
                        {children}
                    </div>
                )}
                <div className="click-hint">Click to expand</div>
            </div>
        </div>
    );
};

export default BentoCard;
