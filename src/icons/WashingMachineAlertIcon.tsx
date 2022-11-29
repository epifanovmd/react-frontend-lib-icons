import React, { FC, memo } from 'react';
import WashingMachineAlertSvg from '../svg/washing-machine-alert.svg';

export interface IWashingMachineAlertIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WashingMachineAlertIcon: FC<IWashingMachineAlertIconProps> = memo(props => {
  return <WashingMachineAlertSvg {...props} />;
});
