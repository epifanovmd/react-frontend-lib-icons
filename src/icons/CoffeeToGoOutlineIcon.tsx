import React, { FC, memo } from 'react';
import CoffeeToGoOutlineSvg from '../svg/coffee-to-go-outline.svg';

export interface ICoffeeToGoOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CoffeeToGoOutlineIcon: FC<ICoffeeToGoOutlineIconProps> = memo(props => {
  return <CoffeeToGoOutlineSvg {...props} />;
});
