import React, { FC, memo } from 'react';
import GarageOpenSvg from '../svg/garage-open.svg';

export interface IGarageOpenIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GarageOpenIcon: FC<IGarageOpenIconProps> = memo(props => {
  return <GarageOpenSvg {...props} />;
});
