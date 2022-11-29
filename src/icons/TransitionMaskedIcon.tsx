import React, { FC, memo } from 'react';
import TransitionMaskedSvg from '../svg/transition-masked.svg';

export interface ITransitionMaskedIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TransitionMaskedIcon: FC<ITransitionMaskedIconProps> = memo(props => {
  return <TransitionMaskedSvg {...props} />;
});
