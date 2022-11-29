import React, { FC, memo } from 'react';
import BikeSvg from '../svg/bike.svg';

export interface IBikeIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BikeIcon: FC<IBikeIconProps> = memo(props => {
  return <BikeSvg {...props} />;
});
