import React, { FC, memo } from 'react';
import CompassOffOutlineSvg from '../svg/compass-off-outline.svg';

export interface ICompassOffOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CompassOffOutlineIcon: FC<ICompassOffOutlineIconProps> = memo(props => {
  return <CompassOffOutlineSvg {...props} />;
});
