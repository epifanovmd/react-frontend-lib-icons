import React, { FC, memo } from 'react';
import CoffeeOutlineSvg from '../svg/coffee-outline.svg';

export interface ICoffeeOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CoffeeOutlineIcon: FC<ICoffeeOutlineIconProps> = memo(props => {
  return <CoffeeOutlineSvg {...props} />;
});
