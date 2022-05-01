import React, { memo, useState } from "react";
import { TextInput, Button } from "components";
import styles from "./SearchBar.module.css";

export type Props = {
  /** Event handler when search/change button is pressed */
  onSearchClick?: (searchText: string) => void;
  /** Placeholder to be shown in the text input */
  searchPlaceholder?: string;
  /** Text to be shown in the search button */
  searchButtonText?: string;
};

/** Search bar element that includes a text input and a search button */
const SearchBar: React.FC<Props> = memo(
  ({
    onSearchClick,
    searchPlaceholder = "Video ID",
    searchButtonText = "Search",
  }) => {
    const [videoId, setVideoId] = useState("");
    return (
      <div className={styles.SearchBar}>
        <TextInput
          placeholder={searchPlaceholder}
          value={videoId}
          onChange={(event) => setVideoId(event?.target?.value)}
        />
        <div className={styles.Divider} />
        <Button
          onClick={onSearchClick ? () => onSearchClick(videoId) : undefined}
          disabled={!videoId}
        >
          {searchButtonText}
        </Button>
      </div>
    );
  }
);

export default SearchBar;
