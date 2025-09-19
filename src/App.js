import React from 'react';
import { useGameState } from './hooks/useGameState';
import WelcomeView from './components/WelcomeView';
import './App.css';

function App() {
  const { 
    currentView, 
    setCurrentView, 
    gameData, 
    startTournament 
  } = useGameState();

  // View handlers
  const handleDirectorSelect = () => {
    setCurrentView('directorModule');
  };

  // View rendering function
  const renderCurrentView = () => {
    switch (currentView) {
      case 'welcome':
        return (
          <WelcomeView 
            onDirectorSelect={handleDirectorSelect}
          />
        );

      case 'directorModule':
        return (
          <div className="App">
            <header className="App-header">
              <h1>Director Module</h1>
              <p>Tournament setup coming soon...</p>
              <button onClick={() => setCurrentView('welcome')}>
                Back to Welcome
              </button>
            </header>
          </div>
        );

      case 'playerAuth':
        return (
          <div className="App">
            <header className="App-header">
              <h1>Player Authentication</h1>
              <p>Player login coming soon...</p>
              <button onClick={() => setCurrentView('welcome')}>
                Back to Welcome
              </button>
            </header>
          </div>
        );

      default:
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
              <button onClick={() => setCurrentView('welcome')} style={{ padding: '10px 20px', fontSize: '16px', marginLeft: '10px' }}>
                Go to Welcome
              </button>
              <p style={{ marginTop: '30px', color: '#61dafb' }}>
                Phase 1 - Basic Setup Complete!
              </p>
            </header>
          </div>
        );
    }
  };

  return renderCurrentView();
}

export default App;