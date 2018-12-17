export default function(
  state = JSON.parse(localStorage.getItem("interval")) || 100,
  action
) {
  switch (action.type) {
    case "GET_INTERVAL":
      let interval = +action.payload;
      localStorage.setItem("interval", JSON.stringify(interval));
      return interval;
  }
  return +state;
}
