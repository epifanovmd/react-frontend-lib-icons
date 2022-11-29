import React, { FC, memo } from 'react';
import WashingMachineOffSvg from '../svg/washing-machine-off.svg';

export interface IWashingMachineOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WashingMachineOffIcon: FC<IWashingMachineOffIconProps> = memo(props => {
  return <WashingMachineOffSvg {...props} />;
});
