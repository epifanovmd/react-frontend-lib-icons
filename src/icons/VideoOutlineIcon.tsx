import React, { FC, memo } from 'react';
import VideoOutlineSvg from '../svg/video-outline.svg';

export interface IVideoOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const VideoOutlineIcon: FC<IVideoOutlineIconProps> = memo(props => {
  return <VideoOutlineSvg {...props} />;
});
