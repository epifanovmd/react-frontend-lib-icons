import React, { FC, memo } from 'react';
import CounterSvg from '../svg/counter.svg';

export interface ICounterIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CounterIcon: FC<ICounterIconProps> = memo(props => {
  return <CounterSvg {...props} />;
});
