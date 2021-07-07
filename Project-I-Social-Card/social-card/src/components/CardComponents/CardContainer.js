import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';
import CardContent from './CardContent';


const CardContainer=()=>{
    return(
        
        <a href='reactjs.org' className='carda'>
       <div className='card'>
           <CardBanner/>
           <CardContent/>

       </div> 
       </a>

    )
}

export default CardContainer;