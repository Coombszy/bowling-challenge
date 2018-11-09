function Game(){
  var Users = [];
  var _MAX_PLAYERCOUNT = 5;
  var _TURN = 1;
}

Game.prototype.addUser = function(userName){
  if (Users.length != MAX_PLAYERCOUNT){
    var NewUser = new User;
    NewUser.myName = userName;
    Users.push(NewUser);
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

Game.prototype.getUserTurnData = function(userName) {
  return Users.find(obj => {return obj.myName === userName}).getATurnData(_TURN);
}







Game.prototype.print = function(){
  //$('#TEST1').innerHTML = "AA";
  var box = document.getElementById("TEST1");
  box.innerHTML = "<table style=\"width:50%\" border=\"0\"><tr><th></th><th>Rounds</th> </tr><tr><td><span id=\"NAME\">Liam</span></td><th><div style=\"display: flex;\"><table style=\"width:100\" border=\"1\"><tr><th><span id=\"1-1\">0</span></th>         		<th><span id=\"1-2\">1</span></th>                </tr>                <tr><th colspan=\"2\"><span id=\"1-t\">2</span></th></tr>    		</table>            <table style=\"width:100\" border=\"1\">            	<tr>    				<th><span id=\"2-1\">0</span></th>            		<th><span id=\"2-2\">1</span></th>                </tr>                <tr><th colspan=\"2\"><span id=\"2-t\">2</span></th></tr>    		</table>            <table style=\"width:100\" border=\"1\">            	<tr>    				<th><span id=\"3-1\">0</span></th>            		<th><span id=\"3-2\">1</span></th>                </tr>                <tr><th colspan=\"2\"><span id=\"3-t\">2</span></th></tr>    		</table>            <table style=\"width:100\" border=\"1\">            	<tr>    				<th><span id=\"4-1\">0</span></th>            		<th><span id=\"4-2\">1</span></th>                </tr>                <tr><th colspan=\"2\"><span id=\"4-t\">2</span></th></tr>    		</table>            <table style=\"width:100\" border=\"1\">            	<tr>    				<th><span id=\"5-1\">0</span></th>            		<th><span id=\"5-2\">1</span></th>                </tr>                <tr><th colspan=\"2\"><span id=\"5-t\">2</span></th></tr>    		</table>            <table style=\"width:100\" border=\"1\">            	<tr>    				<th><span id=\"6-1\">0</span></th>            		<th><span id=\"6-2\">1</span></th>                </tr>                <tr><th colspan=\"2\"><span id=\"6-t\">2</span></th></tr>    		</table>            <table style=\"width:100\" border=\"1\">            	<tr>    				<th><span id=\"7-1\">0</span></th>            		<th><span id=\"7-2\">1</span></th>                </tr>                <tr><th colspan=\"2\"><span id=\"7-t\">2</span></th></tr>    		</table>            <table style=\"width:100\" border=\"1\">            	<tr>    				<th><span id=\"8-1\">0</span></th>            		<th><span id=\"8-2\">1</span></th>                </tr>                <tr><th colspan=\"2\"><span id=\"8-t\">2</span></th></tr>    		</table>            <table style=\"width:100\" border=\"1\">            	<tr>    				<th><span id=\"9-1\">0</span></th>            		<th><span id=\"9-2\">1</span></th>                </tr>                <tr><th colspan=\"2\"><span id=\"9-t\">2</span></th></tr>    		</table>            <table style=\"width:100\" border=\"1\">            	<tr>    				<th><span id=\"10-1\">0</span></th>            		<th><span id=\"10-2\">1</span></th>                    <th><span id=\"10-3\">3</span></th>                </tr>                <tr><th colspan=\"3\"><span id=\"10-t\">2</span></th></tr>    		</table>    	</div>    </th>  </tr></table>";
  console.log("!!!!")
  //"<table style=\"width:50%\" border=\"0\"><tr><th></th><th>Rounds</th> </tr><tr><td>Liam</td><th><div style=\"display: flex;\"><table style=\"width:100\" border=\"1\"><tr><th><span id=\"1-1\">0</span></th>         		<th><span id=\"1-2\">1</span></th>                </tr>                <tr><th colspan=\"2\"><span id=\"1-t\">2</span></th></tr>    		</table>            <table style=\"width:100\" border=\"1\">            	<tr>    				<th><span id=\"2-1\">0</span></th>            		<th><span id=\"2-2\">1</span></th>                </tr>                <tr><th colspan=\"2\"><span id=\"2-t\">2</span></th></tr>    		</table>            <table style=\"width:100\" border=\"1\">            	<tr>    				<th><span id=\"3-1\">0</span></th>            		<th><span id=\"3-2\">1</span></th>                </tr>                <tr><th colspan=\"2\"><span id=\"3-t\">2</span></th></tr>    		</table>            <table style=\"width:100\" border=\"1\">            	<tr>    				<th><span id=\"4-1\">0</span></th>            		<th><span id=\"4-2\">1</span></th>                </tr>                <tr><th colspan=\"2\"><span id=\"4-t\">2</span></th></tr>    		</table>            <table style=\"width:100\" border=\"1\">            	<tr>    				<th><span id=\"5-1\">0</span></th>            		<th><span id=\"5-2\">1</span></th>                </tr>                <tr><th colspan=\"2\"><span id=\"5-t\">2</span></th></tr>    		</table>            <table style=\"width:100\" border=\"1\">            	<tr>    				<th><span id=\"6-1\">0</span></th>            		<th><span id=\"6-2\">1</span></th>                </tr>                <tr><th colspan=\"2\"><span id=\"6-t\">2</span></th></tr>    		</table>            <table style=\"width:100\" border=\"1\">            	<tr>    				<th><span id=\"7-1\">0</span></th>            		<th><span id=\"7-2\">1</span></th>                </tr>                <tr><th colspan=\"2\"><span id=\"7-t\">2</span></th></tr>    		</table>            <table style=\"width:100\" border=\"1\">            	<tr>    				<th><span id=\"8-1\">0</span></th>            		<th><span id=\"8-2\">1</span></th>                </tr>                <tr><th colspan=\"2\"><span id=\"8-t\">2</span></th></tr>    		</table>            <table style=\"width:100\" border=\"1\">            	<tr>    				<th><span id=\"9-1\">0</span></th>            		<th><span id=\"9-2\">1</span></th>                </tr>                <tr><th colspan=\"2\"><span id=\"9-t\">2</span></th></tr>    		</table>            <table style=\"width:100\" border=\"1\">            	<tr>    				<th><span id=\"10-1\">0</span></th>            		<th><span id=\"10-2\">1</span></th>                    <th><span id=\"10-3\">3</span></th>                </tr>                <tr><th colspan=\"3\"><span id=\"10-t\">2</span></th></tr>    		</table>    	</div>    </th>  </tr></table>";
}