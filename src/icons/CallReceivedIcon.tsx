import React, { FC, memo } from 'react';
import CallReceivedSvg from '../svg/call-received.svg';

export interface ICallReceivedIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CallReceivedIcon: FC<ICallReceivedIconProps> = memo(props => {
  return <CallReceivedSvg {...props} />;
});
