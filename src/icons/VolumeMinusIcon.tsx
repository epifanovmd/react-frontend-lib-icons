import React, { FC, memo } from 'react';
import VolumeMinusSvg from '../svg/volume-minus.svg';

export interface IVolumeMinusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const VolumeMinusIcon: FC<IVolumeMinusIconProps> = memo(props => {
  return <VolumeMinusSvg {...props} />;
});
