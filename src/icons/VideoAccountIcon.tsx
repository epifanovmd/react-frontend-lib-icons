import React, { FC, memo } from 'react';
import VideoAccountSvg from '../svg/video-account.svg';

export interface IVideoAccountIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const VideoAccountIcon: FC<IVideoAccountIconProps> = memo(props => {
  return <VideoAccountSvg {...props} />;
});
