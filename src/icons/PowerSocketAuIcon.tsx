import React, { FC, memo } from 'react';
import PowerSocketAuSvg from '../svg/power-socket-au.svg';

export interface IPowerSocketAuIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PowerSocketAuIcon: FC<IPowerSocketAuIconProps> = memo(props => {
  return <PowerSocketAuSvg {...props} />;
});
