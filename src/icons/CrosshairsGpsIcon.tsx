import React, { FC, memo } from 'react';
import CrosshairsGpsSvg from '../svg/crosshairs-gps.svg';

export interface ICrosshairsGpsIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CrosshairsGpsIcon: FC<ICrosshairsGpsIconProps> = memo(props => {
  return <CrosshairsGpsSvg {...props} />;
});
