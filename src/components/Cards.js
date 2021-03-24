import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <h1>Featured Reminders</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem src='images/img-9.jpg' text="Get to know your school like never before" label='FENC' path='/services'/>
                        <CardItem src='images/img-2.jpg' text="Tips to make your presentation better" label='FELS' path='/services'/>
                    </ul>
                    <ul className="cards__items">
                        <CardItem src='images/img-4.jpg' text="This new method makes animating easier" label='FENC' path='/services'/>
                        <CardItem src='images/img-6.jpg' text="Will your performance increase if you start training at UTech?" label='FOSS' path='/services'/>
                        <CardItem src='images/img-3.jpg' text="New president make speech on dropout rates" label='ADMIN' path='/services'/>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;
