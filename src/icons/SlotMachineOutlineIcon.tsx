import React, { FC, memo } from 'react';
import SlotMachineOutlineSvg from '../svg/slot-machine-outline.svg';

export interface ISlotMachineOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SlotMachineOutlineIcon: FC<ISlotMachineOutlineIconProps> = memo(props => {
  return <SlotMachineOutlineSvg {...props} />;
});
