import React, {useState} from 'react';
import './App.css';
import reviews from './components/data';
import Reviews from './components/Reviews';

function App() {

  const [index, setIndex] = useState(0);
  const[reviewsData , setReviewsData] = useState(reviews[index]);

  const checkNumber = (number) => 
  {
    if(number > reviews.length-1)
    {
      return 0;
    }
    if(number < 0)
    {
      return reviews.length-1;
    }

    return number;

  }

  const nextPerson = () => 
    {
      setIndex((index)=>{
        let newIndex = checkNumber(index + 1);
  
        setReviewsData(reviews[newIndex]);
        return checkNumber(newIndex);
        console.log(reviewsData);
      })

    }

    const randNumber = () => 
    {
      setIndex(()=> {
        let newIndex = checkNumber(Math.floor(Math.random() * 11));
        console.log(newIndex);
        setReviewsData(reviews[newIndex]);
        return newIndex;
      })
    }
   


  const prevPerson = () => 
  {
    setIndex((index)=> {
      let newIndex = checkNumber(index - 1);

      setReviewsData(reviews[newIndex]);
      return checkNumber(newIndex);
      
    })
  }

  
  return (
    <div>
        <Reviews review={reviewsData}  nextPerson = {nextPerson} prevPerson={prevPerson}
            randNumber={randNumber}
        />
    </div>
  );

}

export default App;
