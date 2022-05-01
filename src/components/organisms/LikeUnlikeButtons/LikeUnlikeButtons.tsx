import React, { memo, useState, useEffect, useCallback } from "react";
import { LikeButton } from "components";
import styles from "./LikeUnlikeButtons.module.css";

export type Props = {
  /**
   * Id of the video.
   * Will reset button clicked status when this prop changes
   */
  videoId?: string;
};

/** Like and unlike button component */
const LikeUnlikeButtons: React.FC<Props> = memo(({ videoId }) => {
  const [isButtonPressed, setButtonPressed] = useState(false);
  useEffect(() => {
    if (videoId) {
      setButtonPressed(false);
    }
  }, [videoId]);
  const onButtonPressed = useCallback(
    () => setButtonPressed(true),
    [setButtonPressed]
  );
  return (
    <div className={styles.LikeUnlikeWrap}>
      <LikeButton
        isVisible={!isButtonPressed}
        onClick={onButtonPressed}
        videoId={videoId}
      />
      <LikeButton
        isVisible={!isButtonPressed}
        isLike={false}
        onClick={onButtonPressed}
        videoId={videoId}
      />
    </div>
  );
});

export default LikeUnlikeButtons;
