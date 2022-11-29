import React, { FC, memo } from 'react';
import PinSvg from '../svg/pin.svg';

export interface IPinIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PinIcon: FC<IPinIconProps> = memo(props => {
  return <PinSvg {...props} />;
});
