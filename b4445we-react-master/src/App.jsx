import React from 'react'

import './app.css';

// import Form from './Components/Form/Form';

import CardLink from './Components/CardLink/CardLink'; // CardLink.css

const batches = ['B42WETAMIL', 'B4445WETAMIL', 'B49WEENG', 'B43WETAMIL'];

const linkDetails = [
  {
    title: 'Self Paced Courses Offered',
    description: 'Learn & Upskill via Online Courses',
    link: 'https://www.guvi.in/courses'
  },
  {
    title: 'LIVE Classes',
    description: 'Live Classes offering Guaranteed Job Placement Support',
    link: 'https://www.guvi.in/courses'
  },
  {
    title: 'Interactive Practice Platforms',
    description: 'Learn through Hands-on Coding Experience',
    link: 'https://www.guvi.in/code-kata'
  },
  {
    title: 'For Corporates',
    description: 'Meet your hiring needs at ease',
    link: 'https://www.guvi.in/mlp/GUVI-for-corporates'
  }
];

const showFooter = true, isSiteOwned = true;

const App = () => {
  return (
    <div>
      <div
        className='container'
      >
        {/* JSX Component **should not** invoked like normal function */}
        {/* {CardLink('Self Paced', 'Learn more concepts', 'https://www.guvi.in/courses')} */}
        {/* Execute the jsx returning as a tag  */}
        {/* {[
        <h1>B42WETAMIL</h1>,
        <h1>B4445WETAMIL</h1>,
        <h1>B49WEENG</h1>,
        <h1>B43WETAMIL</h1>
      ]} */}
        {/* Array of data to Array components using map */}
        {batches.map((batchName) => {
          return <h1>{batchName}</h1>;
        })}
        {/* <CardLink
          title='Self Paced Courses Offered'
          description="Learn & Upskill via Online Courses"
          link="https://www.guvi.in/courses"
        />
        <CardLink
          title='LIVE Classes'
          description="Live Classes offering Guaranteed Job Placement Support"
          link="https://www.guvi.in/zen-class/?utm_source=guvi-homepage&utm_medium=body_zen_widget&utm_campaign=mid-body_button&utm_content=zen_common"
        />
        <CardLink
          title='Interactive Practice Platforms'
          description="Learn through Hands-on Coding Experience"
          link="https://www.guvi.in/code-kata"
        />
        <CardLink
          title='For Corporates'
          description="Meet your hiring needs at ease"
          link="https://www.guvi.in/mlp/GUVI-for-corporates"
        /> */}
        {linkDetails.map(({ title, description, link }) => {
          return <CardLink
            title={title}
            description={description}
            link={link}
          />
        })}
      </div>
      {/* && conditional render */}
      {showFooter && <div
        style={{
          backgroundColor: 'black',
          color: 'white',
          fontSize: '24px',
          textAlign: 'center'
        }}
      >
        Footer
      </div>}
      {/* conditional rendering using ternary operator ? */}
      {/* {isSiteOwned ? <b>Copy Rights Reserved</b> : <b>No Rights Reserved</b>} */}
      <b>
        {isSiteOwned ? 'Copy Rights Reserved' : 'No Rights Reserved'}
      </b>
      {/* <Form /> */}
    </div>
  )
}

export default App;