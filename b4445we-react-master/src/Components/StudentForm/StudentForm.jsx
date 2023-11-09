import React from 'react';

import styles from './studentform.module.css';


// Create a form to take the data for a student and create the student in front-end
const studentsData = [
  {
    name: 'arun',
    gender: 'Male',
    imageUrl: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg'
  },
  {
    name: 'rajesh',
    gender: 'Male',
    imageUrl: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg'
  },
  {
    name: 'moorthy',
    gender: 'Male',
    imageUrl: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg'
  }
]


const StudentForm = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap'
      }}
    >
      {studentsData.map(({ name, gender, imageUrl }) => {
        return (
          <div
            style={{
              borderRadius: '10px',
              overflow: 'hidden',
              height: 200,
              width: 300,
              border: '1px solid',
              margin: 16,
              textAlign: 'center',
              fontSize: '16px'
            }}
          >
            <img
              src={imageUrl}
              alt={name}
              className={styles.image}
            />
            <br />
            Name: {name}
            <br />
            Sex: {gender}
          </div>
        )
      })}
    </div>
  )
};


export default StudentForm;