import React, { FC, memo } from 'react';
import VideoMinusOutlineSvg from '../svg/video-minus-outline.svg';

export interface IVideoMinusOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const VideoMinusOutlineIcon: FC<IVideoMinusOutlineIconProps> = memo(props => {
  return <VideoMinusOutlineSvg {...props} />;
});
