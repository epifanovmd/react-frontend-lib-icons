import React, { FC, memo } from 'react';
import CoffeeOffSvg from '../svg/coffee-off.svg';

export interface ICoffeeOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CoffeeOffIcon: FC<ICoffeeOffIconProps> = memo(props => {
  return <CoffeeOffSvg {...props} />;
});
