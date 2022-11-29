import React, { FC, memo } from 'react';
import CaravanSvg from '../svg/caravan.svg';

export interface ICaravanIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CaravanIcon: FC<ICaravanIconProps> = memo(props => {
  return <CaravanSvg {...props} />;
});
