import React, { FC, memo } from 'react';
import CookieLockOutlineSvg from '../svg/cookie-lock-outline.svg';

export interface ICookieLockOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CookieLockOutlineIcon: FC<ICookieLockOutlineIconProps> = memo(props => {
  return <CookieLockOutlineSvg {...props} />;
});
