import React, { FC, memo } from 'react';
import SunAngleSvg from '../svg/sun-angle.svg';

export interface ISunAngleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SunAngleIcon: FC<ISunAngleIconProps> = memo(props => {
  return <SunAngleSvg {...props} />;
});
