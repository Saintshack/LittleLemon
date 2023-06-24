import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, useNavigate } from 'react-router-dom';
import AnotherPhoto from './AnotherPhoto.png';
import BookingForm from './BookingForm';

function Main() {
  const [bookingFormData, setBookingFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    guests: '',
  });
  const navigate = useNavigate();

  function submitForm(formData) {

    submitAPI(formData)
      .then((response) => {
        if (response === true) {
          navigate('/confirmed');
        }
      })
      .catch((error) => {

      });
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    submitForm(bookingFormData);
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setBookingFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  return (
    <Router>
      <main>
        <div>
          <h1>Main Component</h1>
          <BookingForm
            bookingFormData={bookingFormData}
            handleFormSubmit={handleFormSubmit}
            handleInputChange={handleInputChange}
          />
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

        <Switch>
          <Route path="/confirmed">
            <ConfirmedBooking />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

function ConfirmedBooking() {
  return (
    <div>
      <h1>Booking Confirmed</h1>
      <p>Your booking has been confirmed. Thank you!</p>
    </div>
  );
}

export default Main;
