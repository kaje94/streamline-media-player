/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { memo, useCallback, useEffect, useState } from "react";
import { Animated } from "react-animated-css";
import { likeSvg } from "assets/images";
import clsx from "clsx";
import styles from "./LikeButton.module.css";

const AnimatedWrap: any = Animated;

export type Props = {
  /** IsLike button or is Dislike button */
  isLike?: boolean;
  /** Button shown/hidden in the UI */
  isVisible?: boolean;
  /** Event handler for button icon onClick */
  onClick?: () => void;
  /**
   * Id of the video.
   * Will reset button clicked status when this prop changes
   */
  videoId?: string;
};

/** Standard Like button UI element to be used throughout the app */
const LikeButton: React.FC<Props> = memo(
  ({ isLike = true, isVisible = true, videoId, onClick }) => {
    const [buttonPressed, setButtonPressed] = useState(false);

    useEffect(() => {
      if (videoId) {
        setButtonPressed(false);
      }
    }, [videoId]);

    const onLikeButtonClick = useCallback(() => {
      setButtonPressed(true);
      if (onClick) {
        onClick();
      }
    }, [onClick]);

    return (
      <AnimatedWrap
        animationIn="fadeIn"
        animationOut={buttonPressed ? "fadeOutUp" : "fadeOut"}
        isVisible={isVisible && !buttonPressed}
      >
        <img
          data-testid="like-unlike-button"
          src={likeSvg}
          alt="Like"
          className={clsx(
            styles.LikeUnlikeButton,
            isLike ? styles.LikeButton : styles.UnlikeButton
          )}
          onClick={onLikeButtonClick}
        />
      </AnimatedWrap>
    );
  }
);

export default LikeButton;
