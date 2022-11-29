import React, { FC, memo } from 'react';
import SlotMachineSvg from '../svg/slot-machine.svg';

export interface ISlotMachineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SlotMachineIcon: FC<ISlotMachineIconProps> = memo(props => {
  return <SlotMachineSvg {...props} />;
});
