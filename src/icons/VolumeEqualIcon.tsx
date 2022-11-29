import React, { FC, memo } from 'react';
import VolumeEqualSvg from '../svg/volume-equal.svg';

export interface IVolumeEqualIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const VolumeEqualIcon: FC<IVolumeEqualIconProps> = memo(props => {
  return <VolumeEqualSvg {...props} />;
});
