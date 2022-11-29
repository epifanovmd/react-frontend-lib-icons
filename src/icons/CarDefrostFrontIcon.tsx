import React, { FC, memo } from 'react';
import CarDefrostFrontSvg from '../svg/car-defrost-front.svg';

export interface ICarDefrostFrontIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CarDefrostFrontIcon: FC<ICarDefrostFrontIconProps> = memo(props => {
  return <CarDefrostFrontSvg {...props} />;
});
