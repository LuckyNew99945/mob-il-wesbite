import React from 'react'
import mark1f from '../img/mob-il mark-1-f.png';
import mark1 from '../img/mob-il mark-1.png';
import mark2 from '../img/mark-2.png';
import mark3 from '../img/mark-3.png';
export default function Main ({id,setData,cars,setCars}) {

  const data = [
    {
      "name": "mark-1",
      "image_url": mark1f,
      "acceleration" : 7.0,
      "speed": 200,
      "capacity": 15
    },
    {
      "name": "mark-2",
      "image_url": mark2,
      "acceleration" : 5.0,
      "speed": 220,
      "capacity": 14
    },
    {
      "name": "mark-3",
      "image_url": mark3,
      "acceleration" : 5.0,
      "speed": 220,
      "capacity": 17
    }
  ]

  const takeId = (e) => {
      
    const item =(e.target);

    const itemtarget = parseInt(item.getAttribute("data-id"));

    // console.log(itemtarget);

    setData(itemtarget);

    setCars(data[itemtarget]);

    // console.log(cars.image_url);


  }


    return (
      <div>
        <section className="cars">
          <section className="specs">
            <div className="spec-1">
              <p>0-100 kph in :</p>
              <h2>{cars.acceleration} </h2>
            </div>
        <div className="spec-2">
          <p>Max Speed :</p>
          <h2>{cars.speed} </h2>
        </div>
        <div className="spec-3">
          <p>Tank Capacity :</p>
          <h2>{cars.capacity} </h2>
        </div>
      </section>
      <section className="display-car">
        <p id="title">THE NEW Mob-il</p>
        <h1>{cars.name}</h1>
        <img src= {cars.image_url} alt="test"/>
        </section>
        </section>
        <hr/>
        <section className="choose-cars" onClick={takeId}>
        <div>

        <img src={mark1} alt="" data-id="0"/>
        <p>Mark-1</p>
      </div>
      <div>
        <img src={mark2} alt="" data-id="1"/>
        <p>Mark-2</p>
      </div>
      <div>
        <img src={mark3} alt="" data-id="2"/>
        <p>Mark-3</p>
      </div>
        </section>
      </div>
    
      
    )

    
  
}

