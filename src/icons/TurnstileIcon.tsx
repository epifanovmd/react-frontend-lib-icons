import React, { FC, memo } from 'react';
import TurnstileSvg from '../svg/turnstile.svg';

export interface ITurnstileIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TurnstileIcon: FC<ITurnstileIconProps> = memo(props => {
  return <TurnstileSvg {...props} />;
});
