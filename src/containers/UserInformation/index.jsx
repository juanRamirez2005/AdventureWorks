import React from "react";

const UserInformation = () => {
  return (
    <div>
      <h1>Introduce following data</h1>
      <div className="user-data--container">
        <h1>Personal Information</h1>
        <div className="form-container">
          <div className="form-group">
            <input
              type="text"
              id="name"
              name="FirstName"
              placeholder="First name"
              autoComplete="given-name"
              required
            />
            <label>First name</label>
          </div>
          <div className="form-group">
            <input
              type="text"
              id="name"
              name="LastName"
              placeholder="LastName"
              autoComplete="family-name"
              required
            />
            <label>Last name</label>
          </div>
          <div className="form-group">
            <input
              type="text"
              id="phone-number"
              name="Phone"
              placeholder="phone number"
              required
            />
            <label>phone number</label>
          </div>
          <div className="form-group">
            <input
              type="email"
              id="email"
              name="EmailAddress"
              placeholder="Email"
              autoComplete="email"
              required
            />
            <label>Email</label>
          </div>
        </div>
        <h2>Location Data</h2>
        <div className="data-information">
          <div className="form-group location-data">
            <label>País</label>
            <input
              className="location-data--select"
              id="location"
              name="location"
              type="text"
              placeholder="Current Country"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              id="continent"
              name="continent"
              placeholder="Continent"
              required
            />
            <label>Continent</label>
          </div>

          <div className="form-group">
            <input
              type="text"
              id="state"
              name="state"
              placeholder="State"
              required
            />
            <label>State</label>
          </div>
        </div>
        <div className="residence-information">
          <h1>Residence Information</h1>
          <div className="residence-information--container">
            <div className="form-group">
              <input
                type="text"
                id="address"
                name="address"
                placeholder="address"
                autoComplete="street-address"
                required
              />
              <label>Address</label>
            </div>
            <div className="form-group">
              <input
                type="text"
                id="city"
                name="city"
                placeholder="City"
                required
              />
              <label>City</label>
            </div>
            <div className="form-group postal-code">
              <input
                type="text"
                id="state"
                name="state"
                placeholder="Postal Code"
                autoComplete="postal-code"
                required
              />
              <label>Postal Code</label>
            </div>
          </div>
        </div>
        <div className="payment-information">
          <h1>Residence Information</h1>
          <div className="payment-information--container">
            <div className="form-group">
              <select name="payment" id="">
                <option value="">Select Payment Method</option>
                <option value="Credit Card">Credit Card</option>
                <option value="Debit Card">Debit Card</option>
                <option value="Bank Transfer">Bank Transfer</option>
                <option value="Buy now, Pay Later<">Buy now, Pay Later</option>
              </select>
              <label>Payment Method</label>
            </div>
            <div className="form-group">
              <input
                type="text"
                id="credit-card-name"
                name="credit-card-name"
                placeholder="Credit Card Name"
                autoComplete="cc-given-name"
                required
              />
              <label>Credit Card Name</label>
            </div>
            <div className="form-group">
              <input
                type="text"
                id="credit-card-number"
                name="credit-card-number"
                placeholder="Credit Card Number"
                autoComplete="cc-number"
                required
              />
              <label>Credit Card Number</label>
            </div>
            <div className="form-group">
              <input
                type="text"
                id="expiration-date"
                name="expiration-date"
                placeholder="Expiration Date"
                autoComplete="cc-exp"
                required
              />
              <label>Expiration Date</label>
            </div>
          </div>
        </div>
        <input type="submit" />
      </div>
    </div>
  );
};

export { UserInformation };
