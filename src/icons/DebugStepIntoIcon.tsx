import React, { FC, memo } from 'react';
import DebugStepIntoSvg from '../svg/debug-step-into.svg';

export interface IDebugStepIntoIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DebugStepIntoIcon: FC<IDebugStepIntoIconProps> = memo(props => {
  return <DebugStepIntoSvg {...props} />;
});
