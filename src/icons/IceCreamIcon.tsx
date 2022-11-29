import React, { FC, memo } from 'react';
import IceCreamSvg from '../svg/ice-cream.svg';

export interface IIceCreamIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const IceCreamIcon: FC<IIceCreamIconProps> = memo(props => {
  return <IceCreamSvg {...props} />;
});
