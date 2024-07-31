import React from 'react';
import './Card.css';

const Card = ({ imageSrc, title, description }) => {
    return (
        <div className="card">
            <img src={imageSrc} alt={title} className="image" />
            <div className="text-content">
                <div className="title">{title}</div>
                <div className="description">{description}</div>
            </div>
        </div>
    );
};

export default Card;
