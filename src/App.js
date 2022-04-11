// import React from "react";
import React from "react";
import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <div className="main-content">
          <p className="text"> GeeksfrGeeks </p>{" "}
        </div>{" "}
        <div className="centre-content">
          <h1 className="price">
            {" "}
            pay your bill <span> /-</span>{" "}
          </h1>{" "}
          <p className="course">Buy your favourite food Now!</p>{" "}
        </div>{" "}
        <div className="last-content">
          <button type="button" className="pay-now-btn">
            Apply Coupons{" "}
          </button>{" "}
          <button type="button" className="pay-now-btn">
            Pay with Netbanking{" "}
          </button>{" "}
          {/* <button type="button" class="pay-now-btn">
            		Netbanking options
            		</button> */}{" "}
        </div>{" "}
        <div className="card-details">
          <p> Pay using Credit or Debit card </p>{" "}
          <div className="card-number">
            <label> Card Number </label>{" "}
            <input
              type="text"
              className="card-number-field"
              placeholder="###-###-###"
            />
          </div>{" "}
          <br />
          <div className="date-number">
            <label> Expiry Date </label>{" "}
            <input
              type="text"
              className="date-number-field"
              placeholder="DD-MM-YY"
            />
          </div>{" "}
          <div className="cvv-number">
            <label> CVV number </label>{" "}
            <input type="text" className="cvv-number-field" placeholder="xxx" />
          </div>{" "}
          <div className="nameholder-number">
            <label> Card Holder name </label>{" "}
            <input
              type="text"
              className="card-name-field"
              placeholder="Enter your Name"
            />
          </div>{" "}
          <button type="submit" className="submit-now-btn">
            submit{" "}
          </button>{" "}
        </div>{" "}
      </div>{" "}
    </>
  );
}

export default App;
