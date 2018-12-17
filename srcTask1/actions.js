export function addNewMessage(message) {
  return {
    type: "ADD_NEW_MESSAGE",
    payload: message
  };
}
export function getMessagesAfterDel(arr) {
  return {
    type: "GET_MESSAGES_AFTER_DELETE",
    payload: arr
  };
}
