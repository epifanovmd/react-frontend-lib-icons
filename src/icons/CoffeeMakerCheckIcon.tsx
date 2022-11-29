import React, { FC, memo } from 'react';
import CoffeeMakerCheckSvg from '../svg/coffee-maker-check.svg';

export interface ICoffeeMakerCheckIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CoffeeMakerCheckIcon: FC<ICoffeeMakerCheckIconProps> = memo(props => {
  return <CoffeeMakerCheckSvg {...props} />;
});
