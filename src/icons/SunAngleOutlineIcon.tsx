import React, { FC, memo } from 'react';
import SunAngleOutlineSvg from '../svg/sun-angle-outline.svg';

export interface ISunAngleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SunAngleOutlineIcon: FC<ISunAngleOutlineIconProps> = memo(props => {
  return <SunAngleOutlineSvg {...props} />;
});
