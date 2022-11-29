import React, { FC, memo } from 'react';
import VideoWirelessOutlineSvg from '../svg/video-wireless-outline.svg';

export interface IVideoWirelessOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const VideoWirelessOutlineIcon: FC<IVideoWirelessOutlineIconProps> = memo(props => {
  return <VideoWirelessOutlineSvg {...props} />;
});
