import React, { FC, memo } from 'react';
import TurnstileOutlineSvg from '../svg/turnstile-outline.svg';

export interface ITurnstileOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TurnstileOutlineIcon: FC<ITurnstileOutlineIconProps> = memo(props => {
  return <TurnstileOutlineSvg {...props} />;
});
