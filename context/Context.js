import React from "react";

const GlobalContext = React.createContext({
  rooms: [],
  setRooms: () => {},
  unfilteredRooms: [],
  setUnfilteredRooms: () => {},
});

export default GlobalContext;
