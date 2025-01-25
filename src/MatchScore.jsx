import React from "react";
import "./MatchScore.css";

const MatchScore = () => {
  const matchData = [
    {
      team1: "SOU",
      team2: "MUN",
      img1: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc6w4IVoNqHsxRpa6FCR9WLmmdPfDaFraF6Q&s',
      img2: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_aHdNv4EO7oD-IsIrK_wQiICSor9Ev7upLg&s',
      date: 'SEP 14',
      time: '17:00 PM',
    },
    {
      team1: "MCI",
      team2: "BRE",
      img1: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc6w4IVoNqHsxRpa6FCR9WLmmdPfDaFraF6Q&s',
      img2: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_aHdNv4EO7oD-IsIrK_wQiICSor9Ev7upLg&s',
      date: 'SEP 14',
      time: '19:30 PM',
    },
    {
      team1: "LIV",
      team2: "NFO",
      img1: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpuLjNVT8DfNM6ogWoPUMQXTHwMDP1MOKC2g&s',
      img2: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_aHdNv4EO7oD-IsIrK_wQiICSor9Ev7upLg&s',
      date: 'SEP 14',
      time: '17:00 PM',
    },
    {
        team1: "SOU",
        team2: "MUN",
        img1: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc6w4IVoNqHsxRpa6FCR9WLmmdPfDaFraF6Q&s',
        img2: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_aHdNv4EO7oD-IsIrK_wQiICSor9Ev7upLg&s',
        date: 'SEP 14',
        time: '17:00 PM',
      },
      {
        team1: "MCI",
        team2: "BRE",
        img1: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc6w4IVoNqHsxRpa6FCR9WLmmdPfDaFraF6Q&s',
        img2: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_aHdNv4EO7oD-IsIrK_wQiICSor9Ev7upLg&s',
        date: 'SEP 14',
        time: '19:30 PM',
      },
      {
        team1: "LIV",
        team2: "NFO",
        img1: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpuLjNVT8DfNM6ogWoPUMQXTHwMDP1MOKC2g&s',
        img2: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_aHdNv4EO7oD-IsIrK_wQiICSor9Ev7upLg&s',
        date: 'SEP 14',
        time: '17:00 PM',
      },
  ];

  return (
    <>
      <div className="match-score-container">
        <div className="button-container">
        <button className="action-button">Upcoming</button>
        <button className="action-button">🟢 Live</button>
        <button className="action-button">Completed</button>
        </div>

        <div className="grid-container">
          {matchData.map((match, index) => (
            <div key={index} className="match-card">
              <div className="match-header">
                <div className="team">
                  <img className="team-img" src={match.img1} alt="team1" />
                  <h2 className="team-name">{match.team1}</h2>
                </div>
                <span className="time">{match.time}</span>
                <div className="team">
                  <img className="team-img" src={match.img2} alt="team2" />
                  <h2 className="team-name">{match.team2}</h2>
                </div>
              </div>

              <div className="match-status">
                <p className="join-game">JOIN GAME</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MatchScore;
