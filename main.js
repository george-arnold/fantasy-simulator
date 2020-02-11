
resetWinCounts();

let PLAYOFFS = [
    {
      playerName: 'Matt',
      playoffCount: 0,
      charlotteCount:0
    },
    {
      playerName: 'Kevin',
      playoffCount: 0,
      charlotteCount:0
    },
    {
      playerName: 'Kate',
      playoffCount: 0,
      charlotteCount:0
    },
   {
     playerName: 'Johnny',
     playoffCount: 0,
     charlotteCount:0
   }, 
   {
    playerName: 'Kaitlin',
    playoffCount: 0,
    charlotteCount:0
  }, 
  {
    playerName: 'Sean',
    playoffCount: 0,
    charlotteCount:0
  }, 
  {
    playerName: 'Shannon',
    playoffCount: 0,
    charlotteCount:0
  }, 
  {
    playerName: 'Meg',
    playoffCount: 0,
    charlotteCount:0
  }, 
  {
    playerName: 'David',
    playoffCount: 0,
    charlotteCount:0
  }, 
  {
    playerName: 'Mike',
    playoffCount: 0,
    charlotteCount:0
  }, 
  {
    playerName: 'Karen',
    playoffCount: 0,
    charlotteCount:0
  }, 
  {
    playerName: 'Colleen',
    playoffCount: 0,
    charlotteCount:0
  }, 
  ];


//create schedules for each players
let matchesWeek11 = [
  {
   
    playerOne:'Johnny',
    playerTwo:'Matt'
  }, 
  {
   
    playerOne:'Kevin',
    playerTwo:'Sean'
  }, 
  {
    playerOne:'Kaitlin',
    playerTwo:'Colleen'
  }, 
  {
    playerOne:'David',
    playerTwo:'Kate'
  }, 
  {
    playerOne:'Shannon',
    playerTwo:'Meg'
  }, 
  {
    playerOne:'Karen',
    playerTwo:'Mike'
  }, 

];

// week 12
let matchesWeek12 = [
  {
   
    playerOne:'Mike',
    playerTwo:'Matt'
  }, 
  {
   
    playerOne:'Kevin',
    playerTwo:'Kaitlin'
  }, 
  {
    playerOne:'David',
    playerTwo:'Shannon'
  }, 
  {
    playerOne:'Meg',
    playerTwo:'Kate'
  }, 
  {
    playerOne:'Karen',
    playerTwo:'Johnny'
  }, 
  {
    playerOne:'Sean',
    playerTwo:'Colleen'
  }, 

];
// week 13
let matchesWeek13 = [
  {
   
    playerOne:'Kate',
    playerTwo:'Matt'
  }, 
  {
   
    playerOne:'David',
    playerTwo:'Kaitlin'
  }, 
  {
    playerOne:'Kevin',
    playerTwo:'Shannon'
  }, 
  {
    playerOne:'Meg',
    playerTwo:'Mike'
  }, 
  {
    playerOne:'Sean',
    playerTwo:'Johnny'
  }, 
  {
    playerOne:'Karen',
    playerTwo:'Colleen'
  }, 

];
// week 14
let matchesWeek14 = [
  {
    playerOne:'Meg',
    playerTwo:'Matt'
  }, 
  {
    playerOne:'Shannon',
    playerTwo:'Kaitlin'
  }, 
  {
    playerOne:'Kevin',
    playerTwo:'David'
  }, 
  {
    playerOne:'Kate',
    playerTwo:'Mike'
  }, 
  {
    playerOne:'Colleen',
    playerTwo:'Johnny'
  }, 
  {
    playerOne:'Karen',
    playerTwo:'Sean'
  }, 

];
let totalGames = 11;
// determine winner of each game
function determineWinner(matches) {
      // loop through each map
  for (let i=0; i<matches.length; i++) {
      // find each player and return points
    let playerOneStrength= locateStrength(matches[i].playerOne)/totalGames;
    let playerTwoStrength= locateStrength(matches[i].playerTwo)/totalGames;
    let relativeStrengthDifferential = (playerOneStrength - playerTwoStrength)/8;
    let playerOneResult = (Math.random()*100);
  // give win to winner of game
    if (playerOneResult + relativeStrengthDifferential >= 50) {
      locateAndAdd(matches[i].playerOne) //
    } else 
      locateAndAdd(matches[i].playerTwo)
  }
}

function locateStrength (stringPlayerName) {
  //take stringPlayerName look for matching key-value in LEAGUE
    for (let i=0; i<LEAGUE.length; i++) {
    if (stringPlayerName===LEAGUE[i].playerName) {
return LEAGUE[i].points;
  }}}

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
    wins: 11,
    points: 1535
  },
  {
    playerName: 'Kevin',
    wins: 6,
    points: 1452
  },
  {
    playerName: 'Kate',
    wins: 4,
    points: 1073
  },
 {
   playerName: 'Johnny',
   wins: 9,
   points: 1392
 }, 
 {
  playerName: 'Kaitlin',
  wins: 6,
  points: 1501
}, 
{
  playerName: 'Sean',
  wins: 7,
  points: 1542
}, 
{
  playerName: 'Shannon',
  wins: 8,
  points: 1268
}, 
{
  playerName: 'Meg',
  wins: 6,
  points: 1220
}, 
{
  playerName: 'David',
  wins: 3,
  points: 1126
}, 
{
  playerName: 'Mike',
  wins: 4,
  points: 1272
}, 
{
  playerName: 'Karen',
  wins: 6,
  points: 1280
}, 
{
  playerName: 'Colleen',
  wins: 2,
  points: 1004
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
