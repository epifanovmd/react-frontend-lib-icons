import React, { FC, memo } from 'react';
import CompassOutlineSvg from '../svg/compass-outline.svg';

export interface ICompassOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CompassOutlineIcon: FC<ICompassOutlineIconProps> = memo(props => {
  return <CompassOutlineSvg {...props} />;
});
