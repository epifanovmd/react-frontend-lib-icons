import React, { FC, memo } from 'react';
import FruitWatermelonSvg from '../svg/fruit-watermelon.svg';

export interface IFruitWatermelonIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FruitWatermelonIcon: FC<IFruitWatermelonIconProps> = memo(props => {
  return <FruitWatermelonSvg {...props} />;
});
