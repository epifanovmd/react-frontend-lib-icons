import React, { FC, memo } from 'react';
import PinOffSvg from '../svg/pin-off.svg';

export interface IPinOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PinOffIcon: FC<IPinOffIconProps> = memo(props => {
  return <PinOffSvg {...props} />;
});
