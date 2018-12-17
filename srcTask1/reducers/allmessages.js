export default function(
  state = JSON.parse(localStorage.getItem("arr")) || [],
  action
) {
  switch (action.type) {
    case "ADD_NEW_MESSAGE":
      let arr = [...state];
      arr.push(action.payload);
      var serialArr = JSON.stringify(arr);
      localStorage.setItem("arr", serialArr);
      return arr;
    case "GET_MESSAGES_AFTER_DELETE":
      let Newarr = action.payload;
      localStorage.clear();
      var NewserialArr = JSON.stringify(Newarr);
      localStorage.setItem("arr", NewserialArr);
      return Newarr;
  }
  return state;
}
