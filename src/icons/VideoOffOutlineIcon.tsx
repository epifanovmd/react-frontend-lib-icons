import React, { FC, memo } from 'react';
import VideoOffOutlineSvg from '../svg/video-off-outline.svg';

export interface IVideoOffOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const VideoOffOutlineIcon: FC<IVideoOffOutlineIconProps> = memo(props => {
  return <VideoOffOutlineSvg {...props} />;
});
