import React, { FC, memo } from 'react';
import LedOnSvg from '../svg/led-on.svg';

export interface ILedOnIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LedOnIcon: FC<ILedOnIconProps> = memo(props => {
  return <LedOnSvg {...props} />;
});
