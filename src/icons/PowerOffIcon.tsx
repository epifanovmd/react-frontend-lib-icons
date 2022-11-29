import React, { FC, memo } from 'react';
import PowerOffSvg from '../svg/power-off.svg';

export interface IPowerOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PowerOffIcon: FC<IPowerOffIconProps> = memo(props => {
  return <PowerOffSvg {...props} />;
});
