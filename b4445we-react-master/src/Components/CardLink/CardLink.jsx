import React from 'react'; // needed for creating a component which uses
// CardLink Component Codes

import styles from './cardlink.module.css'; // module css

// functions
// use either function/arrowfunction for creating components
function CardLink({ title, description, link }) {

  const handleClick = (e) => {
    console.log(e);
    alert(`Joining ${title}`);
  }

  console.log(styles);

  return (
    <div
      // style="background-color: white;" --> html
      style={{
        border: "1px solid",
        height: 200, // '200px'
        width: '300px',
        borderRadius: '10px',
        padding: 16,
        margin: 16,
        minWidth: 300
      }}
      className={styles.container}
    >
      <div
        style={{
          display: 'inline-block'
        }}>
        <i className="fa-solid fa-house fa-2x"></i>
      </div>
      <h2>{title}</h2>
      <p>{description}</p>
      <a
        href={link}
      >
        View Link
      </a>
      <button
        type="button"
        style={{
          marginLeft: 16
        }}
        onClick={handleClick}
      >
        Join Course
      </button>
    </div>
  );
}

export default CardLink;