import React, { FC, memo } from 'react';
import EarthSvg from '../svg/earth.svg';

export interface IEarthIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EarthIcon: FC<IEarthIconProps> = memo(props => {
  return <EarthSvg {...props} />;
});
