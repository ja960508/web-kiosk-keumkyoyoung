/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useRef } from 'react';
import { usePresence } from './PresenceChild';
type AnimatedKeyFrame = Keyframe & {
  [key in keyof React.CSSProperties]: string;
};

interface AnimatedComponentProps<T> extends React.HTMLProps<T> {
  onExit?: AnimatedKeyFrame[];
  onEnter?: AnimatedKeyFrame[];
  children: React.ReactNode;
  isVisible?: boolean;
  keyframeOption?: KeyframeAnimationOptions | undefined;
  onExitAnimationDone?: () => void;
}

function AnimatedComponent(Tag: keyof React.ReactHTML) {
  return function AnimatedComponent({
    onExit = [{}],
    onEnter = [{}],
    keyframeOption,
    children,
    ...otherProps
  }: AnimatedComponentProps<React.ReactHTML>) {
    const { isVisible, onExitAnimationDone } = usePresence();

    const elementRef = useRef<HTMLElement>(null);

    const defaultKeyFrameOption: KeyframeAnimationOptions = {
      duration: 700,
      fill: 'forwards',
      easing: 'ease-in-out',
    };

    useEffect(() => {
      if (!elementRef.current) return;
      if (isVisible) {
        const animation = elementRef.current.animate(onEnter, {
          ...defaultKeyFrameOption,
          ...keyframeOption,
        });

        return () => animation.cancel();
      } else {
        const animation = elementRef.current.animate(onExit, {
          ...defaultKeyFrameOption,
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
