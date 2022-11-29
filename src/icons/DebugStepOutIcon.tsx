import React, { FC, memo } from 'react';
import DebugStepOutSvg from '../svg/debug-step-out.svg';

export interface IDebugStepOutIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DebugStepOutIcon: FC<IDebugStepOutIconProps> = memo(props => {
  return <DebugStepOutSvg {...props} />;
});
