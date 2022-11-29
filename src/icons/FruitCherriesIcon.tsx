import React, { FC, memo } from 'react';
import FruitCherriesSvg from '../svg/fruit-cherries.svg';

export interface IFruitCherriesIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FruitCherriesIcon: FC<IFruitCherriesIconProps> = memo(props => {
  return <FruitCherriesSvg {...props} />;
});
