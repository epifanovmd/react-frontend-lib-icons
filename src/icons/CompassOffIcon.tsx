import React, { FC, memo } from 'react';
import CompassOffSvg from '../svg/compass-off.svg';

export interface ICompassOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CompassOffIcon: FC<ICompassOffIconProps> = memo(props => {
  return <CompassOffSvg {...props} />;
});
