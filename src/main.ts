import { connectToServer } from "./socket-client";
import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <h2> Websocket - Client</h2>

    <input id="jwt-token" placeholder="Json Web Token" />
    <button id="btn-connect">Connect</button>

    <br/>
    <span id="server-status"> Offline </span>

    <ul id="clients-ul"></ul>
`;

// connectToServer();

const inputJwt = document.querySelector<HTMLInputElement>("#jwt-token")!;
const btnConnect = document.querySelector<HTMLButtonElement>("#btn-connect")!;

btnConnect.addEventListener("click", () => {
  if (inputJwt.value.trim().length <= 0)
    return alert("Please enter a valid JWT token");

  connectToServer(inputJwt.value.trim());
});
