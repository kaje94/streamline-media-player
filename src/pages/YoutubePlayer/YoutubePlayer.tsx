import React, { memo, useState } from "react";
import { SearchBar, LikeUnlikeButtons } from "components";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import styles from "./YoutubePlayer.module.css";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

/** Youtube player page which contains the player, search bar and like/unlike buttons */
const YoutubePlayer: React.FC = memo(() => {
  const [videoId, setVideoId] = useState("");
  return (
    <div className={styles.Container}>
      <div className={styles.PlayerWrap}>
        {videoId && (
          <div className={styles.VideoWrap}>
            <LiteYouTubeEmbed
              title={`Video: ${videoId}`}
              id={videoId}
              aspectHeight={10}
              aspectWidth={16}
            />
          </div>
        )}

        <div className={styles.SearchBarWrap}>
          <div className={styles.BottomBarWrap}>
            <SearchBar onSearchClick={setVideoId} searchButtonText="Change" />
          </div>
          {videoId && <LikeUnlikeButtons videoId={videoId} />}
        </div>
      </div>
    </div>
  );
});

export default YoutubePlayer;
