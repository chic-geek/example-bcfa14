export const API_KEY =
  import.meta.env.MODE === "development"
    ? import.meta.env.VITE_FOURSQUARE_API_KEY
    : "";