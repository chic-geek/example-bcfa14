import { useContext, useState } from "react";
import { MagnifyingGlass } from "@phosphor-icons/react";

import Button from "../Button";
import TextInput from "../TextInput";
import { API_KEY } from "../App/app.constants";
import { useLocalStorage } from "../../hooks";
import { VenueContext } from "../../providers/venue-provider";

export default function SearchForm() {
  const [venueName, setVenueName] = useState<string>("");
  const [apiKey, setApiKey] = useState<string>(API_KEY);
  const { status, setSearchResults, setStatus } = useContext(VenueContext);
  const [cachedResults, setCachedResults] = useLocalStorage(
    `fsq-query-${venueName}`
  );

  async function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setStatus("loading");

    if (cachedResults) {
      const { venueName: cachedVenueName, results, timestamp } = cachedResults;
      const cachedResultsAge = Date.now() - timestamp;

      if (
        cachedResultsAge < 5 * 60 * 1000 &&
        cachedVenueName === venueName.toLowerCase()
      ) {
        setSearchResults(results);
        setStatus("success");
        return;
      }
    }

    const url = `https://api.foursquare.com/v3/places/nearby?ll=51.509223%2C-0.113492&query=${venueName}`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: apiKey,
      },
    };

    const response = await fetch(url, options);

    if (!response.ok) {
      setStatus("error");
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const json = await response.json();

    setSearchResults(json.results);
    setStatus(json.results.length > 0 ? "success" : "empty");
    setCachedResults({
      venueName: venueName.toLowerCase(),
      results: json.results,
      timestamp: Date.now(),
    });
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="flex flex-col flex-gap-1 mb-1">
        <div>
          <TextInput
            label="Venue Name:"
            id="venueName"
            value={venueName}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setVenueName(event.target.value);
            }}
          />
        </div>
        <div>
          <TextInput
            label="Foursquare authentication key:"
            id="authKey"
            value={apiKey}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setApiKey(event.target.value);
            }}
          />
        </div>
      </div>
      <Button type="submit" className="flex flex-align-center flex-gap-tight">
        <MagnifyingGlass size={16} />
        <span>Search</span>
      </Button>
      <div style={{ visibility: "hidden" }}>Status: {status}</div>
    </form>
  );
}
