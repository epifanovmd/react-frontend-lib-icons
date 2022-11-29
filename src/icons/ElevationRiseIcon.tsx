import React, { FC, memo } from 'react';
import ElevationRiseSvg from '../svg/elevation-rise.svg';

export interface IElevationRiseIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ElevationRiseIcon: FC<IElevationRiseIconProps> = memo(props => {
  return <ElevationRiseSvg {...props} />;
});
