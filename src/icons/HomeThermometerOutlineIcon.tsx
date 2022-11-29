import React, { FC, memo } from 'react';
import HomeThermometerOutlineSvg from '../svg/home-thermometer-outline.svg';

export interface IHomeThermometerOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HomeThermometerOutlineIcon: FC<IHomeThermometerOutlineIconProps> = memo(props => {
  return <HomeThermometerOutlineSvg {...props} />;
});
