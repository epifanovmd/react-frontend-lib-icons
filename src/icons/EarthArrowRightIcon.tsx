import React, { FC, memo } from 'react';
import EarthArrowRightSvg from '../svg/earth-arrow-right.svg';

export interface IEarthArrowRightIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EarthArrowRightIcon: FC<IEarthArrowRightIconProps> = memo(props => {
  return <EarthArrowRightSvg {...props} />;
});
