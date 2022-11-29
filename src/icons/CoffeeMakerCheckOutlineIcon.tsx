import React, { FC, memo } from 'react';
import CoffeeMakerCheckOutlineSvg from '../svg/coffee-maker-check-outline.svg';

export interface ICoffeeMakerCheckOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CoffeeMakerCheckOutlineIcon: FC<ICoffeeMakerCheckOutlineIconProps> = memo(props => {
  return <CoffeeMakerCheckOutlineSvg {...props} />;
});
