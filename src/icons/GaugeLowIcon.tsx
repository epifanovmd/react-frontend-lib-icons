import React, { FC, memo } from 'react';
import GaugeLowSvg from '../svg/gauge-low.svg';

export interface IGaugeLowIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GaugeLowIcon: FC<IGaugeLowIconProps> = memo(props => {
  return <GaugeLowSvg {...props} />;
});
