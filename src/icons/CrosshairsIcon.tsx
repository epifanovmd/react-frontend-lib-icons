import React, { FC, memo } from 'react';
import CrosshairsSvg from '../svg/crosshairs.svg';

export interface ICrosshairsIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CrosshairsIcon: FC<ICrosshairsIconProps> = memo(props => {
  return <CrosshairsSvg {...props} />;
});
