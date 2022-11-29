import React, { FC, memo } from 'react';
import TransitionSvg from '../svg/transition.svg';

export interface ITransitionIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TransitionIcon: FC<ITransitionIconProps> = memo(props => {
  return <TransitionSvg {...props} />;
});
