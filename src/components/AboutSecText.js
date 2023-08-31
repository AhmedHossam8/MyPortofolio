import React from 'react';

function AboutSecText() {
  const listItemStyle = { color: 'white' }; // Style for list items

  return (
    <div>
      <p>
        <strong style={{color: "aquamarine"}}>Internship Experience:</strong>
        <ul>
          <li style={listItemStyle}>My 2023 ITWorx internship transformed me, enhancing technical skills and creative problem-solving. A highlight was co-developing an AI-driven comic app that merges user prompts with AI images for captivating comic strips. This spanned AI APIs, image processing, and frontend work. Collaborating with experts, I grasped iterative tech refinement and learned adaptability.</li>
          <li style={listItemStyle}>Resulting from my ITWorx internship, the AI comic app epitomizes tech-creativity harmony. It interprets user prompts, AI-curates images, and creates dynamic comics. I contributed in AI integration, image processing, and frontend. This deepened my tech prowess and renewed my innovation dedication. Excited to further leverage tech for impactful strides in computer science.</li>
        </ul>
      </p>
      <p>
        <strong style={{color: "aquamarine"}}>Future Aspirations:</strong>
        <ul>
          <li style={listItemStyle}>My journey in the world of Computer Science is an ever-evolving adventure.</li>
          <li style={listItemStyle}>Eagerly leveraging my skills and experiences to push boundaries and create a meaningful impact.</li>
          <li style={listItemStyle}>Continuing to explore new horizons, collaborate on innovative projects, and strive for excellence in the ever-dynamic realm of technology.</li>
        </ul>
      </p>
    </div>
  );
}

export default AboutSecText;
