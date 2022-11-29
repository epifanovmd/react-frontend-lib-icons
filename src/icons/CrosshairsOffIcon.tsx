import React, { FC, memo } from 'react';
import CrosshairsOffSvg from '../svg/crosshairs-off.svg';

export interface ICrosshairsOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CrosshairsOffIcon: FC<ICrosshairsOffIconProps> = memo(props => {
  return <CrosshairsOffSvg {...props} />;
});
