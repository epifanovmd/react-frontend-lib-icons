import React, { FC, memo } from 'react';
import CoffeeToGoSvg from '../svg/coffee-to-go.svg';

export interface ICoffeeToGoIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CoffeeToGoIcon: FC<ICoffeeToGoIconProps> = memo(props => {
  return <CoffeeToGoSvg {...props} />;
});
