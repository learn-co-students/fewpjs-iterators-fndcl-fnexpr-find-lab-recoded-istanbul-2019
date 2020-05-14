const obj = [
  { year: "2018", result: "L" },
  { year: "2017", result: "W" },
  { year: "2016", result: "N/A" }
]

superbowlWin = (arr) => {

  let winner = arr.find(e => (e.result === "W") ? e.year : undefined)
  if (winner) { return winner.year }
  else { return undefined }
}
superbowlWin(record);
