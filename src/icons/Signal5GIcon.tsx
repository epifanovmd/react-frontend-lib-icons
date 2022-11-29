import React, { FC, memo } from 'react';
import Signal5GSvg from '../svg/signal-5g.svg';

export interface ISignal5GIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const Signal5GIcon: FC<ISignal5GIconProps> = memo(props => {
  return <Signal5GSvg {...props} />;
});
