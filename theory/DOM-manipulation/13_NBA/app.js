const warriorsGames = [{
  awayTeam: {
    team: 'Golden State',
    points: 119,
    isWinner: true
  },
  homeTeam: {
    team: 'Houston',
    points: 106,
    isWinner: false
  }
},
{
  awayTeam: {
    team: 'Golden State',
    points: 105,
    isWinner: false
  },
  homeTeam: {
    team: 'Houston',
    points: 127,
    isWinner: true
  }
},
{
  homeTeam: {
    team: 'Golden State',
    points: 126,
    isWinner: true
  },
  awayTeam: {
    team: 'Houston',
    points: 85,
    isWinner: false
  }
},
{
  homeTeam: {
    team: 'Golden State',
    points: 92,
    isWinner: false
  },
  awayTeam: {
    team: 'Houston',
    points: 95,
    isWinner: true
  }
},
{
  awayTeam: {
    team: 'Golden State',
    points: 94,
    isWinner: false
  },
  homeTeam: {
    team: 'Houston',
    points: 98,
    isWinner: true
  }
},
{
  homeTeam: {
    team: 'Golden State',
    points: 115,
    isWinner: true
  },
  awayTeam: {
    team: 'Houston',
    points: 86,
    isWinner: false
  }
},
{
  awayTeam: {
    team: 'Golden State',
    points: 101,
    isWinner: true
  },
  homeTeam: {
    team: 'Houston',
    points: 92,
    isWinner: false
  }
}
]

//add class
const win = (game, target) => {
  const {homeTeam,awayTeam} = game;
  const targetTeam = homeTeam.team === target ? homeTeam : awayTeam;
  return targetTeam.isWinner;
}

//built teams and points
const builtLi = (game) => {
  const {awayTeam, homeTeam} = game;
  const {team: hTeam, points: hPoints} = homeTeam;
  const {team: aTeam, points: aPoints} = awayTeam;
  const teamsNames = `${hTeam} @ ${aTeam}`;
  let scores; 
  if (hPoints > aPoints) {
    scores = `<b>${hPoints}</b> @ ${aPoints}`;
  } else {
    scores = `${hPoints} @ <b>${aPoints}</b>`;
  }
  const liContent =  `${teamsNames} ${scores}`;
  return liContent;
}

const createGameTable = (data, targetTeam) => {
  //create element
  const ulEl = document.createElement('ul');
  //iteration
  for(let game of data) {
    const liEl = document.createElement('li');    
    liEl.innerHTML = builtLi(game);
    liEl.classList.add(win(game, targetTeam) ? 'win' : 'loss')
    ulEl.appendChild(liEl);
  }
  return ulEl;
}

const houstonSection = document.querySelector('#ht')
const goldenSection = document.querySelector('#gs')
houstonSection.prepend(createGameTable(warriorsGames, 'Houston'))
goldenSection.prepend(createGameTable(warriorsGames, 'Golden State'))



