import React, { FC, memo } from 'react';
import ElectricSwitchSvg from '../svg/electric-switch.svg';

export interface IElectricSwitchIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ElectricSwitchIcon: FC<IElectricSwitchIconProps> = memo(props => {
  return <ElectricSwitchSvg {...props} />;
});
