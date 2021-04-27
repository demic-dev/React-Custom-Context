import React from "react";
import "./App.css";

import { Dashboard, UserProvider } from "./index.d";

const App: React.FC = () => {
  return (
    <UserProvider>
      <Dashboard />
    </UserProvider>
  );
};

export default App;
