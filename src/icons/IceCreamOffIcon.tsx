import React, { FC, memo } from 'react';
import IceCreamOffSvg from '../svg/ice-cream-off.svg';

export interface IIceCreamOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const IceCreamOffIcon: FC<IIceCreamOffIconProps> = memo(props => {
  return <IceCreamOffSvg {...props} />;
});
