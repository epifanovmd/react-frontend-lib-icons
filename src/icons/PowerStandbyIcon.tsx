import React, { FC, memo } from 'react';
import PowerStandbySvg from '../svg/power-standby.svg';

export interface IPowerStandbyIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PowerStandbyIcon: FC<IPowerStandbyIconProps> = memo(props => {
  return <PowerStandbySvg {...props} />;
});
