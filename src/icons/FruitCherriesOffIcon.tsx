import React, { FC, memo } from 'react';
import FruitCherriesOffSvg from '../svg/fruit-cherries-off.svg';

export interface IFruitCherriesOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FruitCherriesOffIcon: FC<IFruitCherriesOffIconProps> = memo(props => {
  return <FruitCherriesOffSvg {...props} />;
});
