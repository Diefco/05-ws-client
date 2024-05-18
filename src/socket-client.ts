import { Manager, Socket } from "socket.io-client";

export const connectToServer = () => {
  const manager = new Manager("http://localhost:3000/socket.io/socket.io.js");

  const socket = manager.socket("/"); // coneccted to root namespace

  addListeners(socket);
};

const addListeners = (socket: Socket) => {
  const serverStatusLabel = document.querySelector("#server-status")!;

  socket.on("connect", () => {
    serverStatusLabel.textContent = "Online";
  });

  socket.on("disconnect", () => {
    serverStatusLabel.textContent = "Offline";
  });
};
