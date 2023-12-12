import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import VenueProvider from "./providers/venue-provider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <VenueProvider>
      <App />
    </VenueProvider>
  </React.StrictMode>
);
