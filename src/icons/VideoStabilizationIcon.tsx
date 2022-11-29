import React, { FC, memo } from 'react';
import VideoStabilizationSvg from '../svg/video-stabilization.svg';

export interface IVideoStabilizationIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const VideoStabilizationIcon: FC<IVideoStabilizationIconProps> = memo(props => {
  return <VideoStabilizationSvg {...props} />;
});
