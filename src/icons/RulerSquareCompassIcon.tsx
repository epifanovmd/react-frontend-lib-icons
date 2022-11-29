import React, { FC, memo } from 'react';
import RulerSquareCompassSvg from '../svg/ruler-square-compass.svg';

export interface IRulerSquareCompassIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RulerSquareCompassIcon: FC<IRulerSquareCompassIconProps> = memo(props => {
  return <RulerSquareCompassSvg {...props} />;
});
