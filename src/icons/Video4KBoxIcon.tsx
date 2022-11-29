import React, { FC, memo } from 'react';
import Video4KBoxSvg from '../svg/video-4k-box.svg';

export interface IVideo4KBoxIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const Video4KBoxIcon: FC<IVideo4KBoxIconProps> = memo(props => {
  return <Video4KBoxSvg {...props} />;
});
