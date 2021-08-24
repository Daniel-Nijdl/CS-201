import React from 'react'
import Item from '../Components/Item'


const Tours = ({tours, removeTour, fetchTours }) => {
  return (
    <section className="tours">
      <div className="title">
        <h2>our Tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        {tours.map((tour) => {
          return <Item key={tour.id} {...tour} removeTour={removeTour}/>
        })}
      </div>
      <button className="btn" onClick={fetchTours}>Refresh</button>
    </section>
  )
}

export default Tours;
