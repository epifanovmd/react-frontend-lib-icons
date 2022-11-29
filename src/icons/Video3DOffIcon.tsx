import React, { FC, memo } from 'react';
import Video3DOffSvg from '../svg/video-3d-off.svg';

export interface IVideo3DOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const Video3DOffIcon: FC<IVideo3DOffIconProps> = memo(props => {
  return <Video3DOffSvg {...props} />;
});
