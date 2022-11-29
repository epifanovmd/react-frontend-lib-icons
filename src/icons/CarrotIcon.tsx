import React, { FC, memo } from 'react';
import CarrotSvg from '../svg/carrot.svg';

export interface ICarrotIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CarrotIcon: FC<ICarrotIconProps> = memo(props => {
  return <CarrotSvg {...props} />;
});
