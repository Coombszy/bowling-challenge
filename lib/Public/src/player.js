function User(){
 var myName = null;
 var _myScoreData = [[],[]]
}

User.prototype.addData = function(turn, value, score){
  this._myScoreData[turn][value] = score 
}
User.prototype.getARoundData = function(turn, round){
  return this._myScoreData[turn, round]
}
User.prototype.getATurnTotalScore = function(turn){
  return this._myScoreData[turn, 0] + this._myScoreData[turn, 1]
}
