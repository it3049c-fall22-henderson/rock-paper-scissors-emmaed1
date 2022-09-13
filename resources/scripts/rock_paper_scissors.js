class RockPaperScissors {
  constructor(username) {
    this.username = username;
    this.score = {
      user: 0,
      cpu:0 
    },
    this.gameHistoryLog = [];
  }

  /**
   * RETURN: one of the following values (`rock`, `paper`, `scissors`)
   * using Math.random() method, you should be able to get one of the following values
   */
  generateCPUResponse(){
    const acceptedValues = [ `rock`, `paper`, `scissors` ];

    if(Math.floor(Math.random()*3) == 0){
      return "rock"
    }else if(Math.floor(Math.random()*3) == 1){
      return "paper"
    }else if(Math.floor(Math.random()*3) == 2){
      return "scissors"
    }

  }
  /**
   * returns one of the following values: `win`, `lose`, `tie`
   * tie:
   *     the user selection the same as the CPU
   * win: 
   *    (user is `rock` and cpu is `scissors
   *     OR
   *    (user is `paper` and cpu is `rock`) 
   *     OR 
   *    (user is `scissors` and cpu is `paper`)
   * `lose`:
   *    the opposite case :)
   * @param {string} userSelection user selection. Can only be one of the following values [`rock`, `paper`, `scissors`]
   * @param {string} cpuSelection computer selection. Can only be one of the following values [`rock`, `paper`, `scissors`]
   */
  determineWinner(userSelection, cpuSelection){
    if (userSelection == cpuSelection){
      return "tie"
    }else if (userSelection == "rock" && cpuSelection == "scissors"){
      return "win"
    }else if (userSelection == "paper" && cpuSelection == "rock"){
      return "win"
    }else if (userSelection == "scissors" && cpuSelection == "paper"){
      return "win"
    }else{
      return "lose"
    }
  }

  /**
   * 
   * @param {string} userSelection user selection. Can only be one of the following values [`rock`, `paper`, `scissors`]
   */
  play(userSelection){
    generateCPUResponse()
    determineWinner(userSelection, cpuSelection)
      if("win"){
        this.score.user ++;
      }else if("lose"){
        this.score.cpu ++;
      }
  }

}