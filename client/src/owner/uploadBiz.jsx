import React, { useState, useEffect } from 'react';

const UploadBiz = () => {
  const [name, setName] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [phone, setPhone] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(businessInfo);
  };

  const businessInfo = {
    businessName: name,
    streetName: `${street} ${city} ${state} ${zipCode}`,
    phoneNumber: phone,
    des: description,
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <lable>Business Name: </lable>
        <input type="text" required onChange={(e) => setName(e.target.value)} />
        <lable>Street Name: </lable>
        <input
          type="text"
          required
          onChange={(e) => setStreet(e.target.value)}
        />
        <lable>City: </lable>
        <input type="text" required onChange={(e) => setCity(e.target.value)} />
        <lable>State: </lable>
        <input
          type="text"
          required
          onChange={(e) => setState(e.target.value)}
        />
        <lable>Zip Code: </lable>
        <input
          type="text"
          required
          onChange={(e) => setZipCode(e.target.value)}
        />
        <lable>Phone Number: </lable>
        <input
          type="text"
          required
          onChange={(e) => setPhone(e.target.value)}
        />
        <lable>Description: </lable>
        <input
          type="text"
          required
          onChange={(e) => setDescription(e.target.value)}
        />

        <input type="submit" />
      </form>
    </div>
  );
};

export default UploadBiz;
