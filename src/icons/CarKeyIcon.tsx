import React, { FC, memo } from 'react';
import CarKeySvg from '../svg/car-key.svg';

export interface ICarKeyIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CarKeyIcon: FC<ICarKeyIconProps> = memo(props => {
  return <CarKeySvg {...props} />;
});
