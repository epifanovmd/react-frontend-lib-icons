import React, { FC, memo } from 'react';
import VideoWirelessSvg from '../svg/video-wireless.svg';

export interface IVideoWirelessIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const VideoWirelessIcon: FC<IVideoWirelessIconProps> = memo(props => {
  return <VideoWirelessSvg {...props} />;
});
