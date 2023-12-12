import { createContext, useState } from "react";
import { FetchStatus, SearchResultType } from "../types/types";

type VenueProviderProps = {
  children: React.ReactNode;
};

type VenueContextType = {
  searchResults: SearchResultType[];
  setSearchResults: (results: SearchResultType[]) => void;
  status: FetchStatus;
  setStatus: (status: FetchStatus) => void;
};

export const VenueContext = createContext<VenueContextType>({
  searchResults: [],
  setSearchResults: () => {},
  status: "idle",
  setStatus: () => {},
});

export default function VenueProvider({ children }: VenueProviderProps) {
  const [searchResults, setSearchResults] = useState<SearchResultType[]>([]);
  const [status, setStatus] = useState<FetchStatus>("idle");

  return (
    <VenueContext.Provider
      value={{
        searchResults,
        setSearchResults,
        status,
        setStatus,
      }}
    >
      {children}
    </VenueContext.Provider>
  );
}
