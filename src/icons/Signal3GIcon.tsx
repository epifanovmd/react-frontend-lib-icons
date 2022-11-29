import React, { FC, memo } from 'react';
import Signal3GSvg from '../svg/signal-3g.svg';

export interface ISignal3GIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const Signal3GIcon: FC<ISignal3GIconProps> = memo(props => {
  return <Signal3GSvg {...props} />;
});
