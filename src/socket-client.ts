import { Manager, Socket } from "socket.io-client";

let socket: Socket;

export const connectToServer = (token: string) => {
  const manager = new Manager("http://localhost:3000/socket.io/socket.io.js", {
    extraHeaders: {
      authentication: token,
    },
  });

  socket?.removeAllListeners();
  socket = manager.socket("/"); // coneccted to root namespace

  addListeners();
};

const addListeners = () => {
  const clientsUL = document.querySelector<HTMLSpanElement>("#clients-ul")!;
  const serverStatusLabel = document.querySelector("#server-status")!;

  socket.on("connect", () => {
    serverStatusLabel.textContent = "Online";
  });

  socket.on("disconnect", () => {
    serverStatusLabel.textContent = "Disconnected";
  });

  socket.on("clients-updated", (clients: string[]) => {
    let clientsHTML = "";
    clients.forEach((clientId) => {
      clientsHTML += `<li>${clientId}</li>`;
    });

    clientsUL.innerHTML = clientsHTML;
  });
};
