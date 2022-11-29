import React, { FC, memo } from 'react';
import BetamaxSvg from '../svg/betamax.svg';

export interface IBetamaxIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BetamaxIcon: FC<IBetamaxIconProps> = memo(props => {
  return <BetamaxSvg {...props} />;
});
