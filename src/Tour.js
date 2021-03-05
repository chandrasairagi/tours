import React, { useState } from 'react';

const Tour = ({id,image,info,name,price,removeTours}) => {
  const [readMore,setreadMore]=useState(false);
  return     <div className="single-tour">
  <img src={image} alt={name}/>
  <footer>
    <div className="tour-info">
  <h4>{name}</h4>
  <p className="tour-price">{price}</p>
  </div>
  <p>{readMore?`${info}`:`${info.substring(0,200)}...`}
  <button onClick={() => setreadMore(!readMore)}>
    {readMore?'show Less' :'read more'}
  </button>
  </p>
  
  <button className="delete-btn" onClick= { () =>removeTours(id) }>Not Intrested</button>
  </footer>
</div>;
};

export default Tour;
