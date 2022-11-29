import React, { FC, memo } from 'react';
import PowerSvg from '../svg/power.svg';

export interface IPowerIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PowerIcon: FC<IPowerIconProps> = memo(props => {
  return <PowerSvg {...props} />;
});
