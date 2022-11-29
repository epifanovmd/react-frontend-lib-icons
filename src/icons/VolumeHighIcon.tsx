import React, { FC, memo } from 'react';
import VolumeHighSvg from '../svg/volume-high.svg';

export interface IVolumeHighIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const VolumeHighIcon: FC<IVolumeHighIconProps> = memo(props => {
  return <VolumeHighSvg {...props} />;
});
