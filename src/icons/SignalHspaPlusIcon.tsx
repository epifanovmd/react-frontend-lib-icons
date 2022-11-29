import React, { FC, memo } from 'react';
import SignalHspaPlusSvg from '../svg/signal-hspa-plus.svg';

export interface ISignalHspaPlusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SignalHspaPlusIcon: FC<ISignalHspaPlusIconProps> = memo(props => {
  return <SignalHspaPlusSvg {...props} />;
});
