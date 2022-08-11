/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useRef } from 'react';
import { getSharedAnimationKeyFrame } from '../../util/animate';
import { usePresence } from './PresenceChild';
type AnimatedKeyFrame = Keyframe & {
  [key in keyof React.CSSProperties]: string;
};

interface AnimatedComponentProps<T extends HTMLElement>
  extends React.DetailedHTMLProps<React.HTMLAttributes<T>, T> {
  onExit?: AnimatedKeyFrame[];
  onEnter?: AnimatedKeyFrame[];
  children?: React.ReactNode;
  isVisible?: boolean;
  animatedRef?: React.RefObject<T>;
  keyframeOption?: KeyframeAnimationOptions | undefined;
  onExitAnimationDone?: () => void;
}

function AnimatedComponent<T extends HTMLElement>(Tag: keyof React.ReactHTML) {
  return function AnimatedComponent({
    onExit = [{}],
    onEnter = [{}],
    keyframeOption,
    children,
    animatedRef,
    ...otherProps
  }: AnimatedComponentProps<T>) {
    const { isVisible, onExitAnimationDone } = usePresence();

    const elementRef = useRef<HTMLElement>(null);
    const defaultKeyFrameOption: KeyframeAnimationOptions = {
      duration: 500,
      fill: 'forwards',
      easing: 'ease-in-out',
    };

    useEffect(() => {
      if (!elementRef.current) return;
      const sharedKeyframe = getSharedAnimationKeyFrame(animatedRef, elementRef);
      if (isVisible) {
        const animation = elementRef.current.animate(sharedKeyframe || onEnter, {
          ...defaultKeyFrameOption,
          ...keyframeOption,
        });

        return () => animation.cancel();
      } else {
        const animation = elementRef.current.animate(sharedKeyframe || onExit, {
          ...defaultKeyFrameOption,
          direction: sharedKeyframe ? 'reverse' : 'normal',
          ...keyframeOption,
        });
        animation.commitStyles();

        animation.finished.then(() => {
          onExitAnimationDone && onExitAnimationDone();
        });

        return () => animation.cancel();
      }
    }, [isVisible]);

    return React.createElement(Tag, { ...otherProps, ref: elementRef }, children);
  };
}

export default AnimatedComponent;