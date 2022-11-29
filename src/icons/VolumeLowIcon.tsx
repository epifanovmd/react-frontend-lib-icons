import React, { FC, memo } from 'react';
import VolumeLowSvg from '../svg/volume-low.svg';

export interface IVolumeLowIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const VolumeLowIcon: FC<IVolumeLowIconProps> = memo(props => {
  return <VolumeLowSvg {...props} />;
});
