import React, { FC, memo } from 'react';
import Signal2GSvg from '../svg/signal-2g.svg';

export interface ISignal2GIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const Signal2GIcon: FC<ISignal2GIconProps> = memo(props => {
  return <Signal2GSvg {...props} />;
});
