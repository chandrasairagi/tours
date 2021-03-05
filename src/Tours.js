import React from 'react';
import Tour from './Tour';
const Tours = ({tours,removeTours}) => {
  return <main>
    <div className="title">
      <h2>OUR TOURS</h2>
      <div className="underline"></div>
    </div>
    
    <div>
      {
        tours.map((tour)=>
        {
          return ( <Tour key={tour.id} {...tour} removeTours={removeTours}></Tour>);
        })
      }
    </div>
  </main>
  ;
};

export default Tours;
