
import PLAYOFFS from 'playoffs';
import {matchesWeek11, matchesWeek12, matchesWeek13, matchesWeek14} from schedules;

//resets the total number of playoff visits from the last simulation
resetWinCounts();

let totalGames = 11;
// determine winner of each game
const determineWinner = matches => {
    matches.forEach(match=> {
      // find each player and return points
      let playerOneStrength= getPoints(match.playerOne)/totalGames;
      let playerTwoStrength= getPoints(match.playerTwo)/totalGames;
      let relativeStrengthDifferential = (playerOneStrength - playerTwoStrength)/4;
      let playerOneResult = (Math.random()*100);
    // give win to winner of game
      if (playerOneResult + relativeStrengthDifferential >= 50) {
        locateAndAdd(match.playerOne) //
      } else 
        locateAndAdd(match.playerTwo)
      })
}

function getPoints (stringPlayerName) {
  //take stringPlayerName look for matching key-value in LEAGUE
  LEAGUE.forEach(player => {
    if(stringPlayerName === player.playerName) {
      return player.points;
    }
  })
}


function locateAndAdd(stringPlayerName) {
//take stringPlayerName look for matching key-value in LEAGUE
  for (let i=0; i<LEAGUE.length; i++) {
  if (stringPlayerName===LEAGUE[i].playerName) {
    LEAGUE[i].wins +=1;
}}}

//sort into Order using .points as a tie
function sortByWins (array){

  array.sort(function (a, b) {
    let winCompare = a.wins - b.wins;
    if (winCompare !== 0) {
        return winCompare;
    } //if the wins are tied, return the higher of LEAGUE[index].points
    return a.points - b.points;
  });

}


// count if index is 11,10,9,8 add to const value
function addToPlayoffCount(){
  let inPlayoffs = [LEAGUE[8].playerName,LEAGUE[9].playerName, LEAGUE[10].playerName, LEAGUE[11].playerName];
  for (let i=0; i< PLAYOFFS.length; i++) 
  {    
    if (LEAGUE[8].playerName === PLAYOFFS[i].playerName) {
      PLAYOFFS[i].playoffCount += 1;
    } else 
      if (LEAGUE[9].playerName === PLAYOFFS[i].playerName) {
        PLAYOFFS[i].playoffCount += 1;
      } else 
      if (LEAGUE[10].playerName === PLAYOFFS[i].playerName) {
        PLAYOFFS[i].playoffCount += 1;
    } else 
      if (LEAGUE[11].playerName === PLAYOFFS[i].playerName) {
      PLAYOFFS[i].playoffCount += 1;}
    } 
}

function addToCharlotteCount(){
  let inCharlotte = [LEAGUE[0].playerName,LEAGUE[1].playerName, LEAGUE[2].playerName, LEAGUE[3].playerName];
  for (let i=0; i< PLAYOFFS.length; i++) 
  {    
    if (LEAGUE[0].playerName === PLAYOFFS[i].playerName) {
      PLAYOFFS[i].charlotteCount += 1;
    } else 
      if (LEAGUE[1].playerName === PLAYOFFS[i].playerName) {
        PLAYOFFS[i].charlotteCount += 1;
      } else 
      if (LEAGUE[2].playerName === PLAYOFFS[i].playerName) {
        PLAYOFFS[i].charlotteCount += 1;
    } else 
      if (LEAGUE[3].playerName === PLAYOFFS[i].playerName) {
      PLAYOFFS[i].charlotteCount += 1;}
    } 
}

// reset LEAGUE to original data state
function resetWinCounts() {
 LEAGUE = [
  {
    playerName: 'Matt',
    wins: 7,
    points: (1074 + 131)
  },
  {
    playerName: 'Kevin',
    wins: 4,
    points: (1125 + 83)
  },
  {
    playerName: 'Kate',
    wins: 5,
    points: (830 + 92)
  },
 {
   playerName: 'Johnny',
   wins: 4,
   points: (1012 + 136)
 }, 
 {
  playerName: 'Kaitlin',
  wins: 7,
  points: (1178 + 90)
}, 
{
  playerName: 'Sean',
  wins: 4,
  points: (853 + 82)
}, 
{
  playerName: 'Shannon',
  wins: 5,
  points: (905 + 91)
}, 
{
  playerName: 'Meg',
  wins: 5,
  points: (1034 + 91)
}, 
{
  playerName: 'David',
  wins: 6,
  points: (1075 + 80)
}, 
{
  playerName: 'Mike',
  wins: 4,
  points: (1054 + 84)
}, 
{
  playerName: 'Karen',
  wins: 7,
  points: (1047 + 103) 
}, 
{
  playerName: 'Colleen',
  wins: 2,
  points: (925 + 91)
}, 
];
} 


function simulateAndReset() {
  //take the number input by the user, run the simulator

  let numByUser = document.getElementById("userInput").value;
  let simulateCount = Number(numByUser);
  for (i=0; i<simulateCount; i++) {
determineWinner(matchesWeek13);
determineWinner(matchesWeek14);
sortByWins(LEAGUE);
console.log(LEAGUE);
addToPlayoffCount();
addToCharlotteCount();
resetWinCounts();
}
PLAYOFFS.sort(function (a, b) {
   return a.playoffCount - b.playoffCount;
});
console.log(PLAYOFFS);
document.getElementById("div1").innerHTML= "<h2>Simulations Run:" + simulateCount + "</h2>";
for (let i = 0; i<PLAYOFFS.length; i++) {
document.getElementById("div1").innerHTML += 
"<p>Name: <span style= 'color:blue; font-size:20px;'> " + PLAYOFFS[i].playerName+ "</span>--Playoff Berth Count: " + PLAYOFFS[i].playoffCount + " ---------Charlotte Count: " + PLAYOFFS[i].charlotteCount+ "</p>";
}

} 
