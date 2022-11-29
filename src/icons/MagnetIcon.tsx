import React, { FC, memo } from 'react';
import MagnetSvg from '../svg/magnet.svg';

export interface IMagnetIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MagnetIcon: FC<IMagnetIconProps> = memo(props => {
  return <MagnetSvg {...props} />;
});
