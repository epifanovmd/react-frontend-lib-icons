import React, { FC, memo } from 'react';
import VolumeSourceSvg from '../svg/volume-source.svg';

export interface IVolumeSourceIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const VolumeSourceIcon: FC<IVolumeSourceIconProps> = memo(props => {
  return <VolumeSourceSvg {...props} />;
});
