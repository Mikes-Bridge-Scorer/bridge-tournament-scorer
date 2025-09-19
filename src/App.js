import React from 'react';
import { useGameState } from './hooks/useGameState';
import './App.css';

function App() {
  const { currentView, gameData, startTournament } = useGameState();

  return (
    <div className="App">
      <header className="App-header">
        <h1>Bridge Tournament Scorer</h1>
        <div style={{ textAlign: 'left', margin: '20px' }}>
          <p><strong>Current View:</strong> {currentView}</p>
          <p><strong>Tables:</strong> {gameData.tables}</p>
          <p><strong>Rounds:</strong> {gameData.rounds}</p>
          <p><strong>Boards per Round:</strong> {gameData.boardsPerRound}</p>
          <p><strong>Total Boards:</strong> {gameData.totalBoards}</p>
          <p><strong>Tournament Started:</strong> {gameData.isStarted ? 'Yes' : 'No'}</p>
          {gameData.roomCode && <p><strong>Room Code:</strong> {gameData.roomCode}</p>}
        </div>
        <button onClick={startTournament} style={{ padding: '10px 20px', fontSize: '16px' }}>
          Start Tournament
        </button>
        <p style={{ marginTop: '30px', color: '#61dafb' }}>
          Phase 1 - Basic Setup Complete!
        </p>
      </header>
    </div>
  );
}

export default App;