import React, { FC, memo } from 'react';
import ThoughtBubbleOutlineSvg from '../svg/thought-bubble-outline.svg';

export interface IThoughtBubbleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ThoughtBubbleOutlineIcon: FC<IThoughtBubbleOutlineIconProps> = memo(props => {
  return <ThoughtBubbleOutlineSvg {...props} />;
});
