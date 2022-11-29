import React, { FC, memo } from 'react';
import ElectricSwitchClosedSvg from '../svg/electric-switch-closed.svg';

export interface IElectricSwitchClosedIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ElectricSwitchClosedIcon: FC<IElectricSwitchClosedIconProps> = memo(props => {
  return <ElectricSwitchClosedSvg {...props} />;
});
