import React, { useState } from "react";
import Tours from './Component/Tours'
import Data from './data'

const App = () => {


  const removeTour = (id)=>{
    const newTours = tours.filter(tour =>tour.id !== id)
    settours(newTours);
  }

  const [tours, settours] = useState(Data);


  const refreshHandler = ()=>{
    settours(Data);
  }

  if(tours.length ===0){
    return(
      <div className="refresh">
        <h2>No Tours Remaining</h2>
        <button className="btn-refresh" onClick={refreshHandler}>Refresh</button>
      </div>
    )
  }


  return (
    <div className="app">
      <Tours tours = {tours} removeTour = {removeTour}></Tours>
    </div>
  )
};

export default App;
