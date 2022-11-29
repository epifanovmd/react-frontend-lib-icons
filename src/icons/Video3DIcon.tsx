import React, { FC, memo } from 'react';
import Video3DSvg from '../svg/video-3d.svg';

export interface IVideo3DIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const Video3DIcon: FC<IVideo3DIconProps> = memo(props => {
  return <Video3DSvg {...props} />;
});
