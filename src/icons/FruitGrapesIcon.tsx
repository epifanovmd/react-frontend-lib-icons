import React, { FC, memo } from 'react';
import FruitGrapesSvg from '../svg/fruit-grapes.svg';

export interface IFruitGrapesIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FruitGrapesIcon: FC<IFruitGrapesIconProps> = memo(props => {
  return <FruitGrapesSvg {...props} />;
});
