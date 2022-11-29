import React, { FC, memo } from 'react';
import FruitPearSvg from '../svg/fruit-pear.svg';

export interface IFruitPearIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FruitPearIcon: FC<IFruitPearIconProps> = memo(props => {
  return <FruitPearSvg {...props} />;
});
