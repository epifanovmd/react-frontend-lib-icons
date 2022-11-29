import React, { FC, memo } from 'react';
import CoffeeMakerSvg from '../svg/coffee-maker.svg';

export interface ICoffeeMakerIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CoffeeMakerIcon: FC<ICoffeeMakerIconProps> = memo(props => {
  return <CoffeeMakerSvg {...props} />;
});
