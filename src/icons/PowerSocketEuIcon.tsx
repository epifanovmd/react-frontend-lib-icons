import React, { FC, memo } from 'react';
import PowerSocketEuSvg from '../svg/power-socket-eu.svg';

export interface IPowerSocketEuIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PowerSocketEuIcon: FC<IPowerSocketEuIconProps> = memo(props => {
  return <PowerSocketEuSvg {...props} />;
});
