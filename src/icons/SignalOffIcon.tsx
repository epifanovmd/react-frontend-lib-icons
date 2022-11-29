import React, { FC, memo } from 'react';
import SignalOffSvg from '../svg/signal-off.svg';

export interface ISignalOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SignalOffIcon: FC<ISignalOffIconProps> = memo(props => {
  return <SignalOffSvg {...props} />;
});
