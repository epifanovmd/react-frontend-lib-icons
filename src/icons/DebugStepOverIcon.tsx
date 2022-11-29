import React, { FC, memo } from 'react';
import DebugStepOverSvg from '../svg/debug-step-over.svg';

export interface IDebugStepOverIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DebugStepOverIcon: FC<IDebugStepOverIconProps> = memo(props => {
  return <DebugStepOverSvg {...props} />;
});
