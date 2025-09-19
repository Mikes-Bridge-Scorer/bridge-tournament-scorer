// Simple Movement Factory for Phase 1
export class MovementFactory {
  static createMovement(tables, movementType, options = {}) {
    return new BasicMovement(tables, movementType, options);
  }

  static calculateOptimalRounds(totalBoards, tables, hasHalf, movementType) {
    const boardsPerRound = Math.floor(totalBoards / Math.floor(tables));
    const rounds = Math.ceil(totalBoards / boardsPerRound);
    
    return {
      rounds,
      boardsPerRound
    };
  }
}

class BasicMovement {
  constructor(tables, movementType, options = {}) {
    this.tables = tables;
    this.movementType = movementType;
    this.options = options;
  }

  getMovement(round) {
    // Simple Mitchell movement simulation
    const movement = {};
    
    for (let table = 1; table <= Math.floor(this.tables); table++) {
      movement[table] = {
        ns: `NS-${table}`,
        ew: `EW-${((table - 1 + round - 1) % Math.floor(this.tables)) + 1}`
      };
    }
    
    return movement;
  }
}