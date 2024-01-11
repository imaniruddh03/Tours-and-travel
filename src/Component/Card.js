import React, { useState } from "react";

const Card = ({ id, info, image, name, price, removeTour }) => {
  const [readmore, setreadmore] = useState(false);
  const description = readmore ? info : `${info.substring(0, 200)}....`;

  const readmoreHandler = () => {
    setreadmore(!readmore);
  };

  return (
    <div className="card">
      <img src={image} className="image" alt="" />
        <div className="tour-info">
                <div className="tour-details">
                    <h4 className="tour-price">₹{price}</h4>
                    <h4 className="tour-name">{name}</h4>
                </div>
                <div className="description">
                    {description}
                    <span onClick={readmoreHandler} className="read-more">
                        {readmore ? "Show less" : "read more"}
                    </span>
                </div>
        </div>
      <button className="btn-red"  onClick={() => removeTour(id)}>Not Intrested</button>
    </div>
  );
};

export default Card;
