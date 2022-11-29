import React, { FC, memo } from 'react';
import GreenhouseSvg from '../svg/greenhouse.svg';

export interface IGreenhouseIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GreenhouseIcon: FC<IGreenhouseIconProps> = memo(props => {
  return <GreenhouseSvg {...props} />;
});
