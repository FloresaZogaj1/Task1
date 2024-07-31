import React from 'react';
import Card from './Card';
import './CardList.css';
import image1 from '../assets/Screenshot 2024-07-31 202257.png';
import image2 from '../assets/aaa.png';
import image3 from '../assets/images 3.png';
import images4 from '../assets/image 4.png';
import images5 from '../assets/image5.png';
import images from '../assets/images6.png';
import images6 from '../assets/9881670.png';
import images7 from '../assets/uu.png';
import image9 from '../assets/images9.png';


const cardsData = [
    { imageSrc: image1, title: 'The TLD', description: 'Does the domain extension match the language of the domain name?' },
    { imageSrc: image2, title: 'Domain Length', description: 'Is the domain short enough to remember?' },
    { imageSrc: image3, title: 'Language', description: 'How complex is the actual domain name?' },
    { imageSrc: images4, title: 'International recognition', description: 'Can the domain name be used on an international scale?' },
    { imageSrc: images5, title: 'Search engine', description: 'Does the domain follow search engine guidelines?' },
    { imageSrc: images, title: 'Advertising Potential', description: 'Could the domain be used for advertising campaigns?' },
    { imageSrc: image9, title: 'Sales Opportunities', description: 'Can the domain name be used on an international scale?' },
    { imageSrc: images6, title: 'Typo susceptibility', description: 'How high is the risk of mistyping the domain name?' },
    { imageSrc: images7, title: 'Business potential', description: 'Can the domain be used as your company address?' },
];

const CardList = () => {
    return (
        <div className="container">
            {cardsData.map((card, index) => (
                <Card 
                    key={index} 
                    imageSrc={card.imageSrc} 
                    title={card.title} 
                    description={card.description} 
                />
            ))}
        </div>
    );
};

export default CardList;
