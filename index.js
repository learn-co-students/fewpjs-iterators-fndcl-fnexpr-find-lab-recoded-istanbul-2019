const obj = [
  { year: "2018", result: "L" },
  { year: "2017", result: "W" },
  { year: "2016", result: "N/A" }
]
/*superbowlWin = (arr) => (arr.result === "W") ? arr.year : undefined;
record.find(superbowlWin);

/*superbowlWin2 = (arr) => arr.find(e => (e.result === "W") ? e.year : undefined);
superbowlWin2(obj);*/

superbowlWin = (arr) => {

  let holder = arr.find(e => (e.result === "W") ? e.year : undefined)
  if (holder) { return holder.year }
  else { return undefined }
}
superbowlWin(record);
