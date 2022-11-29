import React, { FC, memo } from 'react';
import BetaSvg from '../svg/beta.svg';

export interface IBetaIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BetaIcon: FC<IBetaIconProps> = memo(props => {
  return <BetaSvg {...props} />;
});
