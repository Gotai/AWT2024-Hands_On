import React from 'react';
import { socket } from '../services/socket.js';
import { Button } from "@mui/material";

export function ConnectionManager() {
  function connect() {
    socket.connect();
  }

  function disconnect() {
    socket.disconnect();
  }

  return (
    <>
      <Button onClick={() => connect() }> Connect </Button>
      <Button onClick={() => disconnect() }> Disconnect </Button>
    </>
  )
}
