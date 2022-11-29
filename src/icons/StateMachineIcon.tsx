import React, { FC, memo } from 'react';
import StateMachineSvg from '../svg/state-machine.svg';

export interface IStateMachineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const StateMachineIcon: FC<IStateMachineIconProps> = memo(props => {
  return <StateMachineSvg {...props} />;
});
