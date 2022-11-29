import React, { FC, memo } from 'react';
import VolumeOffSvg from '../svg/volume-off.svg';

export interface IVolumeOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const VolumeOffIcon: FC<IVolumeOffIconProps> = memo(props => {
  return <VolumeOffSvg {...props} />;
});
