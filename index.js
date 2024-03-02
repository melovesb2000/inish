class GameFinisher {
    constructor() {
      this.isGameFinished = false;
    }
  
    finishGame() {
      this.isGameFinished = true;
      console.log('Game is finished!');
      // Additional logic to perform when the game is finished
    }
  
    restartGame() {
      this.isGameFinished = false;
      console.log('Game is restarted.');
      // Additional logic to perform when the game is restarted
    }
  }
  
  // Example usage
  const myGameFinisher = new GameFinisher();
  
  // Finish the game
  myGameFinisher.finishGame();
  
  // Check if the game is finished
  console.log('Is the game finished?', myGameFinisher.isGameFinished);
  
  // Restart the game
  myGameFinisher.restartGame();
  
  // Check again after restarting
  console.log('Is the game finished?', myGameFinisher.isGameFinished);
  