import React from 'react';
import AnotherPhoto from './AnotherPhoto.png';
import React, { useReducer, useEffect } from "react";


function Main() {
  const [availableTimes, dispatch] = useReducer(timesReducer, [], initializeTimes);

  function timesReducer(state, action) {
    switch (action.type) {
      default:
        return state;
    }
  }

  function initializeTimes() {
    return useEffect(() => { 
      fetch("https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js") 
        .then((response) => response.json()) 
        .then((jsonData) => setBtcData(jsonData.bpi.USD)) 
        .catch((error) => console.log(error)); 
    }, []); ;
  }


 async function updateTimes(date) {
    try {
      const aiResponse = await "https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js".predictTimes(date); // Make a request to the AI provider's prediction function
      const times = aiResponse.times; 

      dispatch({ type: "UPDATE_TIMES", times });
    } catch (error) {

    }
  }

  return (
    <main>
    <div>
      <h1>Main Component</h1>
      <BookingForm availableTimes={availableTimes} updateTimes={updateTimes} />
    </div>


        <h1>Little Lemon</h1>

        <p>Chicago</p>

        <img alt="AnotherPhoto" height="200" src={AnotherPhoto} width="350" />

        <article>
          <section>
            <h2>About Little Lemon</h2>

            <p>
              Based in Chicago, Illinois, Little Lemon is a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
            </p>
          </section>
        </article>
      </main>
  );
}

export default Main;