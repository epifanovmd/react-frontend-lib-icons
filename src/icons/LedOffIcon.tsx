import React, { FC, memo } from 'react';
import LedOffSvg from '../svg/led-off.svg';

export interface ILedOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LedOffIcon: FC<ILedOffIconProps> = memo(props => {
  return <LedOffSvg {...props} />;
});
