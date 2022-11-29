import React, { FC, memo } from 'react';
import RaspberryPiSvg from '../svg/raspberry-pi.svg';

export interface IRaspberryPiIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RaspberryPiIcon: FC<IRaspberryPiIconProps> = memo(props => {
  return <RaspberryPiSvg {...props} />;
});
