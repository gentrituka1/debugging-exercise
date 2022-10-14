import { gK, strings } from "./strings-english";

const ERROR_ELEMENT_ID = "ERROR";
/*
Prepends a header to the error message
*/
function combineErrorMessage(message: string) {
  return `${gK("errorHeader")}
  ${message}`;
}

/*
 highly sophisticated error toast implementation
*/
export function displayError(err: { message: string }) {
  if (document.getElementById(ERROR_ELEMENT_ID)) {
    return;
  }

  const msgDiv = document.createElement("div");
  msgDiv.id = ERROR_ELEMENT_ID;

  msgDiv.style.width = "200px";
  msgDiv.style.padding = "20px";
  msgDiv.style.backgroundColor = "red";
  msgDiv.style.color = "white";
  msgDiv.style.position = "absolute";
  msgDiv.style.top = "10px";
  msgDiv.style.right = "10px";

  msgDiv.innerText = combineErrorMessage(err.message);

  document.body.appendChild(msgDiv);

  setTimeout(() => {
    msgDiv.remove();
  }, 3000);

  return;
}
