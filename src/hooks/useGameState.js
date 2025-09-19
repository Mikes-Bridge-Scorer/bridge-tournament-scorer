import { useState, useCallback } from 'react';

export const useGameState = () => {
  const [currentView, setCurrentView] = useState('welcome');
  const [userRole, setUserRole] = useState('');
  const [gameData, setGameData] = useState({
    tables: 5,
    rounds: 5,
    boardsPerRound: 3,
    totalBoards: 15,
    currentRound: 1,
    isStarted: false,
    roomCode: '',
    hasHalfTable: false,
    sitOutType: 'EW',
    sitOutTable: null,
    movementType: 'mitchell'
  });

  const [scores, setScores] = useState({});
  const [currentTable, setCurrentTable] = useState(1);
  const [currentPosition, setCurrentPosition] = useState('NS');

  const getTodayPassword = useCallback(() => {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const year = String(today.getFullYear()).slice(-2);
    return `${day}${month}${year}`;
  }, []);

  const updateGameParameters = useCallback((tables, totalBoards, movementType, sitOutTable = null) => {
    setGameData(prevGameData => ({
      ...prevGameData,
      tables,
      totalBoards,
      movementType,
      sitOutTable
    }));
  }, []);

  const saveScore = useCallback((board, table, contract, declarer, result, score) => {
    setScores(prev => ({
      ...prev,
      [board]: {
        ...prev[board],
        [table]: {
          contract,
          declarer,
          result,
          score,
          timestamp: new Date().toISOString()
        }
      }
    }));
  }, []);

  const startTournament = useCallback(() => {
    setGameData(prev => ({ 
      ...prev, 
      isStarted: true,
      roomCode: Math.random().toString(36).substring(2, 8).toUpperCase()
    }));
  }, []);

  const resetGame = useCallback(() => {
    setCurrentView('welcome');
    setUserRole('');
    setScores({});
    setCurrentTable(1);
    setCurrentPosition('NS');
    setGameData({
      tables: 5,
      rounds: 5,
      boardsPerRound: 3,
      totalBoards: 15,
      currentRound: 1,
      isStarted: false,
      roomCode: '',
      hasHalfTable: false,
      sitOutType: 'EW',
      sitOutTable: null,
      movementType: 'mitchell'
    });
  }, []);

  return {
    // State
    currentView,
    setCurrentView,
    userRole,
    gameData,
    setGameData,
    scores,
    currentTable,
    currentPosition,
    
    // Actions
    getTodayPassword,
    updateGameParameters,
    saveScore,
    startTournament,
    resetGame
  };
};