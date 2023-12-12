import "./app.css";

import React from "react";
import {
  MagnifyingGlass,
  Spinner,
  SmileyXEyes,
  XCircle,
} from "@phosphor-icons/react";

import { VenueContext } from "../../providers/venue-provider";

import Sidebar from "../Sidebar";
import AppMarque from "../AppMarque";
import SearchForm from "../SearchForm";
import ContentContainer from "../ContentContainer";
import StatusMessage from "../StatusMessage";
import SearchResults from "../SearchResults";

export default function App() {
  const { searchResults, status } = React.useContext(VenueContext);

  return (
    <div className="app-container">
      <Sidebar>
        <AppMarque>Foursquare venue search</AppMarque>
        <SearchForm />
      </Sidebar>
      <ContentContainer>
        {status === "idle" && (
          <StatusMessage>
            <MagnifyingGlass size={48} />
            <span>Try searching for something use the sidebar.</span>
          </StatusMessage>
        )}
        {status === "loading" && (
          <StatusMessage>
            <Spinner size={48} className="animate" />
            <span>Loading...</span>
          </StatusMessage>
        )}
        {status === "empty" && (
          <StatusMessage>
            <SmileyXEyes size={48} />
            <span>No results. Try searching again.</span>
          </StatusMessage>
        )}
        {status === "error" && (
          <StatusMessage>
            <XCircle size={48} />
            <span>No results. Try searching again.</span>
          </StatusMessage>
        )}
        {searchResults.length > 0 && status === "success" && (
          <SearchResults results={searchResults} status={status} />
        )}
      </ContentContainer>
    </div>
  );
}
