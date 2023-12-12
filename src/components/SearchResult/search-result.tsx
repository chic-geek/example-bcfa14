import { useState } from "react";
import { SearchResultType } from "../../types/types";
import styles from "./search-result.module.css";
import drawerStyles from "../Drawer/drawer.module.css";
import Drawer from "../Drawer";
import CategoryList from "../CategoryList";

type SearchResultProps = {
  result: SearchResultType;
};

export default function SearchResult({ result }: SearchResultProps) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <>
      <li className={styles.container} onClick={() => setIsModalOpen(true)}>
        <h3 className={styles.title}>{result.name}</h3>
        <span className={styles.meta}>{result.location.formatted_address}</span>
      </li>

      {isModalOpen && (
        <Drawer handleDismiss={() => setIsModalOpen(false)}>
          <div className="mb-1">
            <h2 className={drawerStyles.heading}>{result.name}</h2>
            <h4>Address:</h4>
            <span className={`${styles.meta} flex flex-col`}>
              {result.location.formatted_address
                .split(",")
                .map((addressLine) => (
                  <span key={addressLine}>{addressLine}</span>
                ))}
            </span>
          </div>
          <CategoryList categories={result.categories} />
        </Drawer>
      )}
    </>
  );
}
