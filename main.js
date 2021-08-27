const weekDays = (x) => {
  switch (x) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      return "Weekday";
      break;
    case 6:
      return "Weekend";
    default:
      return "Holiday";
  }
};
const day = weekDays(8);
console.log(day);
