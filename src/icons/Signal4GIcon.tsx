import React, { FC, memo } from 'react';
import Signal4GSvg from '../svg/signal-4g.svg';

export interface ISignal4GIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const Signal4GIcon: FC<ISignal4GIconProps> = memo(props => {
  return <Signal4GSvg {...props} />;
});
