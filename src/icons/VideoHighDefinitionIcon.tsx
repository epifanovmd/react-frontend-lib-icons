import React, { FC, memo } from 'react';
import VideoHighDefinitionSvg from '../svg/video-high-definition.svg';

export interface IVideoHighDefinitionIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const VideoHighDefinitionIcon: FC<IVideoHighDefinitionIconProps> = memo(props => {
  return <VideoHighDefinitionSvg {...props} />;
});
