function Game(){
  var Users = [];
  var _MAX_PLAYERCOUNT = 5;
  var _TURN = 1;
}

Game.prototype.addUser = function(userName){
  if (Users.length != MAX_PLAYERCOUNT){
    var NewUser = 
    Users.push(user);
  }
}

Game.prototype.addValue = function(userName, target, value){
  Users.find(obj => {return obj.myName === userName}).addData(_TURN, target, value)
  
}

Game.prototype.calculateScore = function(userName, pinsHit){
  var lastTurnScore = Users.find(obj => {return obj.myName === userName}).getATurnTotalScore(_TURN-1);
  var firstRoundScore = Users.find(obj => {return obj.myName === userName}).getARoundData(_TURN, 0);
  var secondRoundScore = Users.find(obj => {return obj.myName === userName}).getARoundData(_TURN, 1);
  return lastTurnScore+firstRoundScore+secondRoundScore;
}