import React, { FC, memo } from 'react';
import CompassSvg from '../svg/compass.svg';

export interface ICompassIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CompassIcon: FC<ICompassIconProps> = memo(props => {
  return <CompassSvg {...props} />;
});
