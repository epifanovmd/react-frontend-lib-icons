import React, { FC, memo } from 'react';
import CarDefrostRearSvg from '../svg/car-defrost-rear.svg';

export interface ICarDefrostRearIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CarDefrostRearIcon: FC<ICarDefrostRearIconProps> = memo(props => {
  return <CarDefrostRearSvg {...props} />;
});
