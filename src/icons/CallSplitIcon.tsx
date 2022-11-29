import React, { FC, memo } from 'react';
import CallSplitSvg from '../svg/call-split.svg';

export interface ICallSplitIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CallSplitIcon: FC<ICallSplitIconProps> = memo(props => {
  return <CallSplitSvg {...props} />;
});
