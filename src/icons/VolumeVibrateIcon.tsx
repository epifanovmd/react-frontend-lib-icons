import React, { FC, memo } from 'react';
import VolumeVibrateSvg from '../svg/volume-vibrate.svg';

export interface IVolumeVibrateIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const VolumeVibrateIcon: FC<IVolumeVibrateIconProps> = memo(props => {
  return <VolumeVibrateSvg {...props} />;
});
