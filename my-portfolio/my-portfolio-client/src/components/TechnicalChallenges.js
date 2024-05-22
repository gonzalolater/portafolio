import React from 'react';

const TechnicalChallenges = () => {
  const challenges = [
    { "title": "Technical Challenges 1", "description": "Description of the first technical challenge." }, 
    { "title": "Technical Challenges 2", "description": "Description of the second technical challenge." },
    { "title": "Technical Challenges 3", "description": "Description of the third technical challenge." }
  ];

  return (
    <div style={{
        marginTop: '70px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
      <h2>Technical Challenges</h2>
      <ul>
        {challenges.map((challenge, index) => (
          <li key={index}>
            <h3>{challenge.title}</h3>
            <p>{challenge.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TechnicalChallenges;