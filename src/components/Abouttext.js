import React from 'react';

function Abouttext() {
  const listItemStyle = { color: 'white' }; // Style for list items

  return (
    <div>
      <p>
        <strong style={{color: "aquamarine"}}>Academic Excellence:</strong>
        <ul>
          <li style={listItemStyle}>I'm Ahmed Emara, an enthusiastic undergraduate student majoring in Computer Science.</li>
          <li style={listItemStyle}>I've consistently secured the top position in my class for two consecutive semesters; a testament to my insatiable curiosity and unwavering dedication to excellence.</li>
        </ul>
      </p>
      <br />
      <p>
        <strong style={{color: "aquamarine"}}>Competitive Achievement:</strong>
        <ul>
          <li style={listItemStyle}>Representing my university at the ECPC in summer 2022.</li>
          <li style={listItemStyle}>Collaborated with exceptional peers to conquer intricate coding challenges, showcasing my resilience in real-world problem-solving scenarios.</li>
        </ul>
      </p>
      <br />
      <p>
        <strong style={{color: "aquamarine"}}>Teaching and Mentorship:</strong>
        <ul>
          <li style={listItemStyle}>Beyond the classroom, I've embraced a role as a problem-solving instructor.</li>
          <li style={listItemStyle}>Guiding fellow students through coding challenges, deepening my understanding and igniting a passion for teaching and mentorship.</li>
        </ul>
      </p>
    </div>
  );
}

export default Abouttext;
