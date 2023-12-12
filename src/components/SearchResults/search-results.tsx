import { SearchResultType } from "../../types/types";
import styles from "./search-results.module.css";
import SearchResult from "../SearchResult";

type SearchResultsProps = {
  results: SearchResultType[];
  status: string;
};

export default function SearchResults({ results }: SearchResultsProps) {
  return (
    <ul className={styles.container}>
      {results.map((result) => (
        <SearchResult key={result.fsq_id} result={result} />
      ))}
    </ul>
  );
}
