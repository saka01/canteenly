import React, { useState } from 'react';
import Styles from '../../styles/linkinbio.module.css';



const MyForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    linkedInBio: '',
  });


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      linkedInBio: '',
    });
  };

  return (
    <form className={Styles.formContainer} onSubmit={handleSubmit}>
      <label className={Styles.label}>
        First Name:<br />
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
          className={Styles.inputField}
        />
      </label>
      <br /><br />
      <label className={Styles.label}>
        Last Name:<br />
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleInputChange}
          className={Styles.inputField}
        /><br />
      </label>
      <br />
      <label className={Styles.label}>
        Email: <br />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          className={Styles.inputField}
        />
      </label>
      <br /><br />
      <label className={Styles.label}>
        Phone Number:<br />
        <input
          type="tel"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleInputChange}
          className={Styles.inputField}
        />
      </label>
      <br /><br />
      <label className={Styles.label}>
        Cheff's Name:<br />
        <input
          name="linkedInBio"
          value={formData.linkedInBio}
          onChange={handleInputChange}
          className={Styles.inputField}
        />
      </label>
      <br /><br />
      <button type="submit" className={Styles.button}>
        Submit
      </button>
    </form>
  );
};

export default MyForm;
