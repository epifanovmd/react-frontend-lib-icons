import React, { FC, memo } from 'react';
import CoffeeOffOutlineSvg from '../svg/coffee-off-outline.svg';

export interface ICoffeeOffOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CoffeeOffOutlineIcon: FC<ICoffeeOffOutlineIconProps> = memo(props => {
  return <CoffeeOffOutlineSvg {...props} />;
});
