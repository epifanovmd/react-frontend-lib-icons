import React, { FC, memo } from 'react';
import ThoughtBubbleSvg from '../svg/thought-bubble.svg';

export interface IThoughtBubbleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ThoughtBubbleIcon: FC<IThoughtBubbleIconProps> = memo(props => {
  return <ThoughtBubbleSvg {...props} />;
});
