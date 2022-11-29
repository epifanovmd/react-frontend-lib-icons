import React, { FC, memo } from 'react';
import CarBackSvg from '../svg/car-back.svg';

export interface ICarBackIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CarBackIcon: FC<ICarBackIconProps> = memo(props => {
  return <CarBackSvg {...props} />;
});
