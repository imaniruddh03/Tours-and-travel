import React from 'react'
import Card from './Card'

const Tours = ({tours , removeTour }) => {
  return (
    <div className='container'>
        <div>
          <h2 className='title'>React's Tours</h2>
        </div>
        <div className='cards'>   
            {
                tours.map((tour) =>{
                    return <Card {...tour} removeTour = {removeTour}/>
                })
            }
            
        </div>
      
    </div>
  )
}

export default Tours
