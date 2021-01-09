function getNumberOfDays(date) {
  console.log(date);
  cur_date = new Date();
  console.log("todays date", cur_date);
  const split_date = date.split("/");
  prev_date = new Date(split_date[2], split_date[1] - 1, split_date[0]);
  console.log("prev date", prev_date);
  return Math.floor((cur_date - prev_date) / (1000 * 60 * 60 * 24));
}

date = "10/08/2020"

console.log(getNumberOfDays(date));
