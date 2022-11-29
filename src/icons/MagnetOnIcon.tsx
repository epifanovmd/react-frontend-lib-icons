import React, { FC, memo } from 'react';
import MagnetOnSvg from '../svg/magnet-on.svg';

export interface IMagnetOnIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MagnetOnIcon: FC<IMagnetOnIconProps> = memo(props => {
  return <MagnetOnSvg {...props} />;
});
