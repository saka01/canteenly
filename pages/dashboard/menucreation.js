import DashboardLayout from '../../dashboard/DashboardLayout';
import styles from '../../styles/menucreation.module.css';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import myImage from '../../myImage.jpg';
import Image from "next/image";

const MenuCreation = () => {
  const [description, setDescription] = useState('');
  const [maxWordCount] = useState(200);
  const [wordCount, setWordCount] = useState(maxWordCount);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState("12:00");

  const handleDescriptionChange = (event) => {
    const inputText = event.target.value;
    const words = inputText.match(/\S/g) || [];
    const currentWordCount = words.length;

    if (currentWordCount > maxWordCount) {
      const truncatedInput = words.slice(0, maxWordCount).join('');
      setDescription(truncatedInput);
    } else {
      setDescription(inputText);
    }

    const remainingWordCount = maxWordCount - currentWordCount;
    setWordCount(Math.max(0, remainingWordCount));
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  return (
    <DashboardLayout>
      <div className={styles.menuContainer}>
        {/* Right Side */}
        <div>
          <h2 className={styles.menu}>Menu Creation</h2>

          {/* Render content */}
          <div>
            <div>
              <p className={styles.menu}>Upload Images</p>
              <div className={styles.upload}>
                <Image src={myImage} width={'100'} height={'100'} alt="My Image" />
                <div className={styles.round}>
                  <input className={styles.input} type="file" />
                  <i className={[styles.fa, styles['fa-camera']].join(' ')} style={{ color: '#fff' }}></i>
                  <p className={styles.menu}>Upload Images</p>
                </div>
              </div>
            </div>

            <div className={styles.menuItem}>
              <label>Name:</label><br />
              <input type="text" placeholder="Food name" />
            </div>

            <div className={styles.menuItem}>
              <label>Price:</label><br />
              <input type="text" placeholder=" $Price" />
            </div>

            <div className={styles.menuItem}>
              <label>Date:</label><br />
              <div className={styles.datePickerContainer}>
                <i className={[styles.fa, styles['fa-calendar']].join(' ')}></i>
                <DatePicker
                  selected={selectedDate}
                  onChange={handleDateChange}
                 
                 
                  dateFormat="MMMM d, yyyy "
                  placeholderText="Select date "
                />
              </div>
            </div>

            <div className={styles.time}>
              <label className={styles.prime}>Time:</label><br />
              <input
                type="time" className={styles.time}
                value={selectedTime}
                onChange={handleTimeChange}
              />
            </div>

            <div className={styles.menuItem}>
              <label>Description:</label><br />
              <textarea
                className={styles.menuItems}
                placeholder="Food description"
                value={description}
                onChange={handleDescriptionChange}
                style={{ resize: 'none' }}
              />
              <div>
                <button type="submit">Submit</button>
              </div>
              <p
                style={{
                  position: 'absolute',
                  bottom: '5px', right: '5px',
                  fontSize: '12px', color: '#666',
                }}
              >
                Words remaining: {wordCount}
              </p>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default MenuCreation;
