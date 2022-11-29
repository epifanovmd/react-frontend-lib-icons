import React, { FC, memo } from 'react';
import HandCycleSvg from '../svg/hand-cycle.svg';

export interface IHandCycleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HandCycleIcon: FC<IHandCycleIconProps> = memo(props => {
  return <HandCycleSvg {...props} />;
});
