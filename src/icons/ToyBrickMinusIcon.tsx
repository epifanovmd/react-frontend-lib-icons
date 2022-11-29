import React, { FC, memo } from 'react';
import ToyBrickMinusSvg from '../svg/toy-brick-minus.svg';

export interface IToyBrickMinusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ToyBrickMinusIcon: FC<IToyBrickMinusIconProps> = memo(props => {
  return <ToyBrickMinusSvg {...props} />;
});
