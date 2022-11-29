import React, { FC, memo } from 'react';
import WashingMachineSvg from '../svg/washing-machine.svg';

export interface IWashingMachineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WashingMachineIcon: FC<IWashingMachineIconProps> = memo(props => {
  return <WashingMachineSvg {...props} />;
});
