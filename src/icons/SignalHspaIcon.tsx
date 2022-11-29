import React, { FC, memo } from 'react';
import SignalHspaSvg from '../svg/signal-hspa.svg';

export interface ISignalHspaIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SignalHspaIcon: FC<ISignalHspaIconProps> = memo(props => {
  return <SignalHspaSvg {...props} />;
});
