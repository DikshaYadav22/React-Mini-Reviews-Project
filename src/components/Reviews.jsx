import React from 'react';
import previous from '../previous.png';
import next from '../next.jpeg';
import { Button } from 'reactstrap';

const Reviews = ( { review, nextPerson, prevPerson, randNumber } ) => 
{
    return(
        <>
            <h2 className='text-center reviews-title'>Our Reviews</h2>
            <div className='main-container'>
                        <div className='flex-container'>
                            <img src = {review.image} className="res-img" />
                        </div>
                        <div className='flex-container'>
                            <strong className='reviews-subheading'>{review.name}</strong>

                        </div>
                        <div className='flex-container'>
                            <span className='reviews-span'>{review.job}</span>
                        </div>

                        <div className='flex-container'>
                            <p className="reviews-para">{review.text}</p>
                        </div>

                        <div className="flex-container">
                            <Button onClick={()=>prevPerson()} >
                                <img src={previous} width="10" />
                            </Button>
                            <Button onClick={()=>nextPerson()}>
                                <img src={next} width="10" />
                            </Button>
                        </div>

                        <div className="flex-container">
                            <Button onClick={()=>randNumber()} color="info">Surprise Me</Button>
                        </div>
                    </div>
                        
                    </>
              )
}

export default Reviews;