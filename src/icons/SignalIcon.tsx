import React, { FC, memo } from 'react';
import SignalSvg from '../svg/signal.svg';

export interface ISignalIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SignalIcon: FC<ISignalIconProps> = memo(props => {
  return <SignalSvg {...props} />;
});
