import React, { FC, memo } from 'react';
import CarLimousineSvg from '../svg/car-limousine.svg';

export interface ICarLimousineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CarLimousineIcon: FC<ICarLimousineIconProps> = memo(props => {
  return <CarLimousineSvg {...props} />;
});
