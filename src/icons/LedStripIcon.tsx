import React, { FC, memo } from 'react';
import LedStripSvg from '../svg/led-strip.svg';

export interface ILedStripIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LedStripIcon: FC<ILedStripIconProps> = memo(props => {
  return <LedStripSvg {...props} />;
});
