import React, { FC, memo } from 'react';
import CarabinerSvg from '../svg/carabiner.svg';

export interface ICarabinerIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CarabinerIcon: FC<ICarabinerIconProps> = memo(props => {
  return <CarabinerSvg {...props} />;
});
