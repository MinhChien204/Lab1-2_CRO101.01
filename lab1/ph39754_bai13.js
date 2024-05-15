const players = [
  { name: 'Messi', goals: 30 },
  undefined,
  { name: 'Ronaldo', goals: 28 },
  { name: 'Neymar', goals: 22 },
  { goals: 2 },
  { name: 'Mbappé', goals: 25 },
  { name: 'Pele', goals: null },
];

function isValidPlayer(player) {
  return player && player.name && player.goals !== undefined && player.goals !== null;
}

let maxGoals = 0;
let filteredPlayers = [];

let maxGoalsPlayer = null;

filteredPlayers = players.filter((player) => {
  if (isValidPlayer(player)) {
    if (player.goals > maxGoals) {
      maxGoals = player.goals;
      maxGoalsPlayer = player;
    }
    return true;
  }
  return false;
});

console.log("Danh sách cầu thủ hợp lệ:", filteredPlayers);
console.log("Người có nhiều bàn thắng nhất:", maxGoalsPlayer);