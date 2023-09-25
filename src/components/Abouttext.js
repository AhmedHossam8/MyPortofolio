import React from 'react';
import aboutData from '../data/aboutData.json';

function Abouttext() {
  const listItemStyle = { color: 'white' };

  return (
    <div>
      {aboutData.sections.map((section, index) => (
        <div key={index}>
          <p>
            <strong style={{ color: 'aquamarine' }}>{section.title}</strong>
            <ul>
              {section.content.map((item, itemIndex) => (
                <li key={itemIndex} style={listItemStyle}>
                  {item}
                </li>
              ))}
            </ul>
          </p>
          <br />
        </div>
      ))}
    </div>
  );
}

export default Abouttext;
