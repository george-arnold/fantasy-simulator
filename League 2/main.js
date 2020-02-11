resetWinCounts();

let PLAYOFFS = [
    {
      playerName: 'George',
      playoffCount: 0
    },
    {
      playerName: 'Dustin',
      playoffCount: 0
    },
    {
      playerName: 'Blake',
      playoffCount: 0
    },
   {
     playerName: 'Glenn',
     playoffCount: 0
   }, 
   {
    playerName: 'Sean',
    playoffCount: 0
  }, 
  {
    playerName: 'Matt',
    playoffCount: 0
  }, 
  {
    playerName: 'Travis',
    playoffCount: 0
  }, 
  {
    playerName: 'Justin',
    playoffCount: 0
  }, 
  {
    playerName: 'Jason',
    playoffCount: 0
  }, 
  {
    playerName: 'Dan',
    playoffCount: 0
  }
  ];


//create schedules for each players


// week 12
let matchesWeek12 = [
  {
    playerOne:'George',
    playerTwo:'Justin'
  }, 
  {
   
    playerOne:'Matt',
    playerTwo:'Dustin'
  }, 
  {
    playerOne:'Sean',
    playerTwo:'Travis'
  }, 
  {
    playerOne:'Dan',
    playerTwo:'Jason'
  }, 
  {
    playerOne:'Blake',
    playerTwo:'Glenn'
  }
];
// week 13
let matchesWeek13 = [
  {
   
    playerOne:'George',
    playerTwo:'Travis'
  }, 
  {
   
    playerOne:'Dustin',
    playerTwo:'Jason'
  }, 
  {
    playerOne:'Sean',
    playerTwo:'Glenn'
  }, 
  {
    playerOne:'Matt',
    playerTwo:'Justin'
  }, 
  {
    playerOne:'Blake',
    playerTwo:'Dan'
  }

];
// week 14
let matchesWeek14 = [
  {
    playerOne:'George',
    playerTwo:'Dustin'
  }, 
  {
    playerOne:'Jason',
    playerTwo:'Travis'
  }, 
  {
    playerOne:'Sean',
    playerTwo:'Dan'
  }, 
  {
    playerOne:'Matt',
    playerTwo:'Blake'
  }, 
  {
    playerOne:'Glenn',
    playerTwo:'Justin'
  }, 

];
let totalGames = 10;
// determine winner of each game
function determineWinner(matches) {
      // loop through each map
  for (let i=0; i<matches.length; i++) {
      // find each player and return points
    let playerOneStrength= locateStrength(matches[i].playerOne)/totalGames;
    let playerTwoStrength= locateStrength(matches[i].playerTwo)/totalGames;
    let relativeStrengthDifferential = (playerOneStrength - playerTwoStrength)/2;
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
  let inPlayoffs = [LEAGUE[6].playerName,LEAGUE[7].playerName, LEAGUE[8].playerName, LEAGUE[9].playerName];
  for (let i=0; i< PLAYOFFS.length; i++) 
  {    
    if (LEAGUE[6].playerName === PLAYOFFS[i].playerName) {
      PLAYOFFS[i].playoffCount += 1;
    } else 
      if (LEAGUE[7].playerName === PLAYOFFS[i].playerName) {
        PLAYOFFS[i].playoffCount += 1;
      } else 
      if (LEAGUE[8].playerName === PLAYOFFS[i].playerName) {
        PLAYOFFS[i].playoffCount += 1;
    } else 
      if (LEAGUE[9].playerName === PLAYOFFS[i].playerName) {
      PLAYOFFS[i].playoffCount += 1;}
    } 
}

// reset LEAGUE to original data state
function resetWinCounts() {
 LEAGUE = [
  {
    playerName: 'Dustin',
    wins: 11,
    points: 1386
  },
  {
    playerName: 'Glenn',
    wins: 8,
    points: 1365
  },
  {
    playerName: 'Blake',
    wins: 7,
    points: 1374
  },
 {
   playerName: 'Travis',
   wins: 5,
   points: 1203
 }, 
 {
  playerName: 'Jason',
  wins: 5,
  points: 1202
}, 
{
  playerName: 'George',
  wins: 4,
  points: 1326
}, 
{
  playerName: 'Justin',
  wins: 5,
  points: 1270
}, 
{
  playerName: 'Sean',
  wins: 4,
  points: 1245
}, 
{
  playerName: 'Matt',
  wins: 4,
  points: 1263
}, 
{
  playerName: 'Dan',
  wins: 2,
  points: 1180
}
];
} 


function simulateAndReset() {
  let numByUser = document.getElementById("userInput").value;
  let simulateCount = Number(numByUser);
  for (i=0; i<simulateCount; i++) {
//determineWinner(matchesWeek11);
determineWinner(matchesWeek12);
determineWinner(matchesWeek13);
determineWinner(matchesWeek14);
sortByWins(LEAGUE);
console.log(LEAGUE);
addToPlayoffCount();
resetWinCounts();
}
PLAYOFFS.sort(function (a, b) {
   return a.playoffCount - b.playoffCount;
});
document.getElementById("div1").innerHTML= "<h2>Simulations Run:" + simulateCount;
for (let i = 0; i<PLAYOFFS.length; i++) {
document.getElementById("div1").innerHTML += 
"</h2> <p>Name: " + PLAYOFFS[i].playerName+ "--Playoff Berth Count: " + PLAYOFFS[i].playoffCount + "</p>";
}

}
