import React, { FC, memo } from 'react';
import CoffeeMakerOutlineSvg from '../svg/coffee-maker-outline.svg';

export interface ICoffeeMakerOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CoffeeMakerOutlineIcon: FC<ICoffeeMakerOutlineIconProps> = memo(props => {
  return <CoffeeMakerOutlineSvg {...props} />;
});
