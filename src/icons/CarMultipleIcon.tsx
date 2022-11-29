import React, { FC, memo } from 'react';
import CarMultipleSvg from '../svg/car-multiple.svg';

export interface ICarMultipleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CarMultipleIcon: FC<ICarMultipleIconProps> = memo(props => {
  return <CarMultipleSvg {...props} />;
});
