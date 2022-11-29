import React, { FC, memo } from 'react';
import CompassRoseSvg from '../svg/compass-rose.svg';

export interface ICompassRoseIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CompassRoseIcon: FC<ICompassRoseIconProps> = memo(props => {
  return <CompassRoseSvg {...props} />;
});
