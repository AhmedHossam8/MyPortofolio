import React from 'react';
import aboutSecData from '../data/aboutSecData.json';

function AboutSecText() {
  const listItemStyle = { color: 'white' };

  return (
    <div>
      {aboutSecData.sections.map((section, index) => (
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

export default AboutSecText;
